import { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import React, { useEffect } from "react";
import videotest from '../src/교수님.mp4';
import ReactDOM from 'react-dom'
function Inputvoice({keynum}){


  const [isOnline, setIsOnline] = useState(null);


  // useEffect(() => {
  //   console.log("생성");
  // }, []); // Component가 mount 됐을때(쳐음 나타났을때)

  useEffect(() => {
    console.log("리랜더링");
  }); // Component가 리랜더링 됐을때


// 신경 ㄴㄴ
{/* <div id="accordion-1">
<div class="container">
<div class="row">
    <div class="col-lg-12">
        <h2 class="h2-heading">Result</h2>                 
    </div> 
</div> 
<div class="row">
    <div class="col-lg-12">
        <div class="accordion" id="accordionExample">
            <div class="card">
              <video id='customvideo' src={videotest}></video>                         
            </div>                                  
        </div> 

    </div> 
</div> 
</div> 
</div> */}



  useEffect(() => {
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
                      <video autoPlay controls id='customvideo' src={videotest}></video>                         
                    </div>                                  
                </div> 

            </div> 
        </div> 
        </div> 
        </div>
      );
      ReactDOM.render(element, document.getElementById('videotestdiv'));
      
  }, [isOnline]); // Component가 업데이트 됐을때

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
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
      setAudio(e.target.files[0])
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(audio)
    await getAudioBase64(audio);
    request_json['voice'] = audio_base64;
    console.log(request_json)
    
    if(audio){
      await axios({
        method: 'post',
        url: 'http://192.168.154.43:5000',
        data: JSON.stringify(request_json),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) =>{
        let videodata = res.video;
        setIsOnline(videodata) 
        console.log(videodata)
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