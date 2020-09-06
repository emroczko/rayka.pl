var interval = setInterval(photosChange, 3000)
var index = 1;

function photosChange() {
    photos = ["photo1.png", "photo2.png", "photo3.png"]
    document.getElementsByClassName("welcomephoto")[0].style.backgroundImage = "url(" + photos[index] +")";
    //document.getElementsByClassName("welcomephoto")[0].style.transition = "0.4s all";
    if(index == 1)
    {
        document.getElementsByClassName("welcomephoto")[0].style.color = "#262626";
    }
    else{
        document.getElementsByClassName("welcomephoto")[0].style.color = "#aaa";
    }
    if(index < 2){
        index++;
    }
    else{
        index = 0;
    }
}

