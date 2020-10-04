$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$(document).ready(function(){
    $('#form').on('submit', function(e){
        //Stop the form from submitting itself to the server.
        e.preventDefault();
        var email = $('#email').val();
        var message = $('#message').val();
        $.ajax({
            type: "POST",
            url: "https://rayka.pl/server.php",
            data: {email: email, message: message},
            success: function(){
                alert('form was submitted');
            }
        });
    });
});

