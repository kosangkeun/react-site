import { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import { Buffer } from 'buffer';
function Inputvoice({keynum}){


  const [isOnline, setIsOnline] = useState(null);
  const [test_number, setTest_number] = useState(0);

  // https://www.code-helper.com/answers/decodes-a-string-of-data-which-has-been-encoded-using-base-64-encoding-nodejs

  const atob = (str) => Buffer.from(str, "base64").toString("binary");

  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const blobToDataURL = (blob, callback) => {
    var a = new FileReader();
    a.onload = function (e) {
      callback(e.target.result);
    };
    a.readAsDataURL(blob);
  };
  // useEffect(() => {
  //   console.log("생성");
  // }, []); // Component가 mount 됐을때(쳐음 나타났을때)

  useEffect(() => {
    console.log("리랜더링");
  }); // Component가 리랜더링 됐을때

  useEffect(() => {
    if(isOnline != null){

    console.log('업데이트');

      const element = (
        <div id="accordion-1">
        <div class="container">
        <div class="row">
        </div> 
        <div class="row">
            <div class="col-lg-12">
                <div class="accordion" id="accordionExample">
                    <div class="card" id="videotest">
                      <video autoPlay controls id='customvideo' src={isOnline}></video>                         
                    </div>                                  
                </div> 

            </div> 
        </div> 
        </div> 
        </div>
      );
      ReactDOM.render(element, document.getElementById('videotestdiv'));
      
  }else {
  const element = (
    <div id="accordion-1">
    <div class="container">
    <div class="row">
    </div> 
    <div class="row">
        <div class="col-lg-12">
            <div class="accordion" id="accordionExample">
                <div class="card" id="videotest">
                <img src='images/Result.jpg' width="100%" height="100%"/>                        
                </div>                                  
            </div> 

        </div> 
    </div> 
    </div> 
    </div>
  );
  ReactDOM.render(element, document.getElementById('videotestdiv'));}}, [isOnline]); // Component가 업데이트 됐을때

  const userId = uuid();

  const [audio_base64, setAudioBase64] = useState("");
  const [audio, setAudio] = useState(new File([], ""));
  
  var request_json = {
    uuid: userId,
    selected_model: keynum,
    voice: '',
  };

  const getAudioBase64 = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setAudioBase64(reader.result);
      
    };
  };

  const onChangeAudio = (e) => {
    e.preventDefault();
    //const reader = new FileReader();
    if(e.target.files[0]){
      //reader.readAsDataURL(e.target.files[0])
      setAudio(e.target.files[0])
      getAudioBase64(e.target.files[0]);
    }
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(audio);
    request_json['voice'] = audio_base64;
    console.log(request_json);
    setTest_number(1);
    if(audio){
      await axios({
        method: 'post',
        url: 'http://192.168.154.67:5000/cdhd/request_video',
        data: JSON.stringify(request_json),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) =>{

        const data = res.data;
        console.log(data.video)

        if (data.error === "" || data.error == undefined){
          var video_data = data.video
          const blob = b64toBlob(video_data, "video/mp4");
          blobToDataURL(blob, function (dataurl) {
            setIsOnline(dataurl)
          });
        }else{
          console.log(data.error)
          alert("실패!")
        }
        
      });
    }
    
  }
  
    return(
        <div id="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">2. Input Your Voice</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">                   
                                                         

                <form onSubmit={onSubmit}>
                    <div class="card">
                        <div class="card-body">
                        <input type="file" id="avatar" name="avatar" accept="audio/*" onChange={onChangeAudio}></input>
                        <button type="submit" class="form-control-submit-button"  value="Upload File"  >전송</button>
                        </div>
                    </div>

                    <div className="form-group">
                        
                    </div>
                
                </form>
                    

                   
                    
                    

                </div> 
            </div> 
        </div> 
    </div> 
    )
}
export default Inputvoice;