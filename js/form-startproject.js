// JavaScript Document

// contact form
$(document).ready(function() {
	$('form#start-form').submit(function() {
	   $('form#start-form .error').remove();
	   var hasError = false;
	   
       $('.requiredField').each(function() {
    	   if(jQuery.trim($(this).val()) == '') {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error"> * required filed </span>');
                $(this).addClass('inputError');
                hasError = true;
            }
             else if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))) {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">* email is not valid </span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
    if(!hasError) {
        $('form#start-form input.submit').fadeOut('normal', function() {
        $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
        $('form#start-form').slideUp("fast", function() {
        $(this).before('<div class="container-fluid text-center" ><div class="success">Thank you. Your project details was sent successfully.</div> </div>');
        });
    });
    }
    return false;
    });
});