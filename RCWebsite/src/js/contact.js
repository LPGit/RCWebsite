$(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        var postUrl = "https://api.formbucket.com/f/buk_LGuta76AKjIljx07kEVxlemD";

        var contactForm = $(this);
        var submitButton = $('input[type=submit]', contactForm);

        $.ajax({
            url: postUrl,
            type: 'POST',
            crossDomain: true,
            headers: {
                'accept': 'application/javascript',
            },
            data: contactForm.serialize(),
            beforeSend: function () {
                submitButton.prop('disabled', true);
            }
        })
            .done(function (response) {
                $("#successAlert").slideToggle().delay(7000).slideToggle();
                submitButton.prop('disabled', false);
                contactForm[0].reset();
            })
            .fail(function (response) {
                $("#failAlert").slideToggle().delay(7000).slideToggle();
                submitButton.prop('disabled', false);
            })

    });
});