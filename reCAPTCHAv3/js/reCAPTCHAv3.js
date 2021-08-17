getReCaptcha();  // This is the initial call to request the initial token

 //This sets the interval to keep requesting a new token every 90 seconds, as Google's tokens expire after 120 seconds
setInterval(function () { getReCaptcha(); }, 90 * 1000);

function getReCaptcha() {
    grecaptcha.ready(function () {
        //Insert your site key here within the quotation marks right after the execute method name
        grecaptcha.execute('SiteKey', { action: 'homepage' }).then(function (token) {

            $.ajax({
                type: "POST",
                url: "/reCAPTCHAv3Service.asmx/SetToken",
                data: JSON.stringify({ _token: token }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    console.log('Passed the token successfully');
                },
                failure: function (response) {
                    document.getElementById("reCAPTCHAResponse").value = response.d;
                },
                error: function (err) {
                    document.getElementById("reCAPTCHAResponse").value = JSON.stringify(err, null, 2);
                }
            });
        });
    });
 }

//Add Button trigger - sets the return value back to the hidden reCAPTCHAResponse field
function btnClick() {
    //Now post to verify the Captcha
    $.ajax({
        type: "POST",
        async: false,
        url: "/reCAPTCHAv3Service.asmx/CaptchaVerify",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
            function (response) {
                //Send the JSON string back to our server
                document.getElementById("reCAPTCHAResponse").value = response.d;
            },
        failure: function (response) {
            alert(reponse.d);
            //Send nothing back to our server but an empty string. Should cause an empty object to be created.
            document.getElementById("reCAPTCHAResponse").value = response.d;
        },
        error: function (err) {
            document.getElementById("reCAPTCHAResponse").value = JSON.stringify(err, null, 2);
        }
    });
};
