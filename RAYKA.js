var interval = setInterval(photosChange, 3000)
var index = 1;

photos = ["photo1.png", "photo2.png", "photo3.png"]

function photosChange() {
    document.getElementsByClassName("welcomephoto")[0].style.backgroundImage = "url(" + photos[index] +")";
    changeFont(index);
    if(index < 2) index++;
    else index = 0;
}

function changeFont(ind){
    if(ind == 1) document.getElementsByClassName("welcomephoto")[0].style.color = "#262626";
    else document.getElementsByClassName("welcomephoto")[0].style.color = "#aaa";
}

//document.addEventListener('DOMContentLoaded', function(event) {
//    document.getElementById("offerid").addEventListener("click", function() {
        
 //     });
 // })

 $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});