$('#contact-form-submit').click(function (e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactPurpose = $('#contact-purpose').val();
    // data validation code here
    var url = "//docs.google.com/forms/d/e/1FAIpQLSeEgTJHEzDtge3urFNuxY36-OIsRHKEyeMPD48VSLrW4tnANA/formResponsee";
    var data = {
        'entry.1700421139': contactName,
        'emailAddress': contactEmail,
        'entry.564374202': contactPurpose,
    };
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: data,
        statusCode: {
            0: function () {
                console.log("unknown");
                window.location.href = "/index.html";
            },
            200: function () {
                console.log("success");
                window.location.href = "/index.html";
            }
        }
    });
});