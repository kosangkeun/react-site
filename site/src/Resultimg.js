import React, { useState} from "react";
import axios from 'axios';

function Resultimg(){

    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.post(
                'http://192.168.154.43:5000',
            );
            setData(response.data);
        } catch (e) {
          console.log(e);
        }
    };

    return(
    <div id="accordion-1">
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
                            <div>
                                <div>
                                    <button onClick={onClick}>불러오기</button>
                                </div>

                                {data && (
                                    <textarea
                                        rows={7}
                                        value={JSON.stringify(data, null, 2)}
                                        readOnly={true}
                />
                                )}
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 

        </div> 
    </div> 
    )
}
export default Resultimg;