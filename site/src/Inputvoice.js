import { useState } from 'react';
import AudioRecord from "./AudioRecord";
import axios from 'axios';
import uuid from 'react-uuid';
import model_Number from './Selectimg'

function Inputvoice(){

  const Selected_model = model_Number();

  const userId = uuid();
  console.log(userId);  

  const [audio_base64, setAudioBase64] = useState("");
  const [audio, setAudio] = useState(new File([], ""));
  
  var request_json = {
    uuid: userId,
    selected_model: Selected_model,
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