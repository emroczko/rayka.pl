$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$(document).ready(function(){
    $('#form').on('submit', function(e){
        e.preventDefault();
        var email = $('#email').val();
        var message = $('#message').val();
        $.ajax({
            type: "POST",
            url: "https://rayka.pl/server.php",
            data: {email: email, message: message},
            success: function(data){
                alert('Wiadomość o treści'+data.message+"została wysłana.\n"+"Nadawca: "+data.email);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function(event){

    document.getElementById("clip1").addEventListener("click", function playClip1(){
        var number = 1;
        playYouTube(number);
    });
    document.getElementById("clip2").addEventListener("click", function playClip2(){
        var number = 2;
        playYouTube(number);
    });
    document.getElementById("clip3").addEventListener("click", function playClip3(){
        var number = 3;
        playYouTube(number);
    });
    document.getElementById("clip4").addEventListener("click", function playClip4(){
        var number = 4;
        playYouTube(number);
    });
   
    
    function playYouTube(number) {
        var video = document.createElement("iframe");
        var parent = document.getElementsByClassName("galleryYT")[0];
        var child = document.getElementById("clip"+(number));
        links = ["https://www.youtube.com/embed/mqcnVNStVTc", "https://www.youtube.com/embed/DZv7yQeR2pw",
                "https://www.youtube.com/embed/3QBUUqGQLek", "https://www.youtube.com/embed/vfAqRAEc0sE"];

        video.setAttribute("src", links[number-1]);
        video.setAttribute("frameborder", "0");
        video.setAttribute("allowfullscreen", "allowfullscreen");
        video.setAttribute("accelerometer", "accelerometer");
        video.setAttribute("encrypted-media", "encrypted-media");
        video.setAttribute("gyroscope", "gyroscope");
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("picture-in-picture", "picture-in-picture");
        
        parent.replaceChild(video,child);
    }
});




