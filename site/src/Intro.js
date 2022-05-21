import React from "react";

function Intro(){
    return(
        <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h1 class="h1-large">Facial Introduce</h1>
                        <p class="introduce"> 외국 영화, 드라마 등의 영상 매체를 우리말로 더빙한 컨텐츠들은 입모양이 맞지 않는 문제가 있습니다</p>
                        
                        <p class="introduce"> 예를 들어서 할리우드 영화 등을 보면, 원본 언어는 영어이고, 배우들 또한 영어로 말하지만, 이를 한국어로 더빙하게 되면 배우들의 입모양이 맞지 않는다는것은 당연할 것입니다</p>
                        <p class="introduce"> Talking Face 분야는, 사람이 말하는 목소리와 인물의 정면 얼굴 사진이 들어갔을때, 해당 사진속의 인물이 동시에 입력된 목소리로 말하는 듯하게 동영상으로 만들어주는 테스크 입니다</p>
                        <a class="btn-solid-lg page-scroll" href="#about">Start</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
    )
}
export default Intro;