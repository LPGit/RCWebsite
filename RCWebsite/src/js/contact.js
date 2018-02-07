$(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        var subscribeForm = $(this);
        var subscribeButton = $('input[type=submit]', subscribeForm);

        //   if ($("input[name='email']").val() === '') {
        //     alert('Please enter an email address')
        //     return
        //   }

        $.ajax({
            url: subscribeForm.prop('action'),
            type: 'POST',
            crossDomain: true,
            headers: {
                'accept': 'application/javascript',
            },
            data: $('#contactForm').serialize(),
            beforeSend: function () {
                subscribeButton.prop('disabled', 'disabled');
            }
        })
            .done(function (response) {
                // You will do something WAY BETTER than alert
                // because you are an awesome designer.
                alert('Thanks for subscribing!');
                subscribeButton.prop('disabled', false);
            })
            .fail(function (response) {
                alert('Dang, something went wrong!');
                subscribeButton.prop('disabled', false);
            })

    });
});