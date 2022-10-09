function Show_Menu(){
    document.getElementById('Nav').style.display="block";
}
function Close_Menu(){
    document.getElementById('Nav').style.display="none";
}
var i=0;           //Start point
var images=[];     //Array of images
var time=3000;     //Transition time

//Image List
images[0]="https://static.wixstatic.com/media/84770f_eec1917a982c4ef9b8d7bbf83190111c~mv2.png/v1/fill/w_1349,h_679,q_90/84770f_eec1917a982c4ef9b8d7bbf83190111c~mv2.webp";
images[1]="https://static.wixstatic.com/media/84770f_b243d52fd3a74e869ed65de985a0d275~mv2.png/v1/fill/w_1349,h_679,q_90/84770f_b243d52fd3a74e869ed65de985a0d275~mv2.webp";
images[2]="https://static.wixstatic.com/media/84770f_e979003896a44dab8a99435565b3e9f0~mv2.png/v1/fill/w_1349,h_679,q_90/84770f_e979003896a44dab8a99435565b3e9f0~mv2.webp";

//Change Image
function changeImg()
{
    document.slides.src=images[i];

    if(i<images.length-1)
    {
        i++;
    }
    else{
        i=0;
    }

    setTimeout((changeImg),time);
}
window.onload=changeImg;
