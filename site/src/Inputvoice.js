import { useState } from 'react';
import AudioRecord from "./AudioRecord";
import axios from 'axios';


function Inputvoice(){
  const [audio, setAudio] = useState({audio_file:"",});
  const onChangeImg = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if(e.target.files[0]){
    fileReader.readAsDataURL(e.target.files[0])}
    fileReader.onload = () => {
      setAudio(
        {
          audio_file: e.target.files[0],
          
        }
      )
      
     
  
  }
  
};
  


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(audio.audio_file)
    if(setAudio){
      
      const formData = new FormData()
      formData.append('files',audio.audio_file)
      
      await axios({
        method: 'post',
        url: '192.168.154.43:5000',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
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

                        <input type="file" id="avatar" name="avatar" accept="audio/*" onChange={onChangeImg}></input>
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