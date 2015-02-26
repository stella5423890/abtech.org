$( document ).ready(function() {
    var signup_form = $("#signup");
    var signup_url = "/signup"
    signup_form.submit(function(event) {
        console.log("signup");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: signup_url,
            data: signup_form.serialize(),
            success: function(data)
            {
                console.log("success");
                console.log(data);
                console.log(data.responseText);
                $("#status").text(data);
                $("#status").css("color", "green");
            },
            error: function(data)
            {
                console.log("error");
                console.log(data.responseText);
                $("#status").text("An error occurred... " + data.responseText);
                $("#status").css("color", "red");
            }
        });
    });

});
