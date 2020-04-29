


function upDate(previewPic){
    var x = previewPic.src;
    document.getElementById('image').style.backgroundImage = "url("+x+")";
    document.getElementById('image').innerHTML= previewPic.alt;  

}

function unDo(){
   document.getElementById('image').style.backgroundImage="URL('')";
   document.getElementById('image').innerHTML="Hover over an image below to display here.";
}