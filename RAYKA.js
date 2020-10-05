$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
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





$(document).ready(function(){
    $('#form').on('submit', function(event){
        event.preventDefault();
        $('#alert').text('Wysyłanie...').fadeIn(0); 
        grecaptcha.ready(function () { 
            grecaptcha.execute("6Lci5tMZAAAAAPgsg1phTB9hbltQW2VUY1dNJdg5", { action: "contact" }).then(function (token) { 
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
                $.ajax({
                    type: "POST",
                    url: "https://rayka.pl/server.php",
                    data: $('#form').serialize(),
                    dataType: 'json',
                    
                    success: function( _response ){
                        var error = _response.error;
                        var success = _response.success;
                        if(error != null) {
                            $('#alert').text(error);
                        }
                        else {
                            $('#alert').text(success);
                            $('#submit-button').remove();
                        }
                    },
                    error: function(jqXhr, json, errorThrown){
                        var error = jqXhr.responseText;
                        $('#alert').html(error);
                    }
                });
            }); 
        });
        
    });
});




