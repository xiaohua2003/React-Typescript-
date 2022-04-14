function sendMailPitRequest() {
     // JavaScript uses `id` to fetch value
     let notificationEmail = $("#notificationEmail").val(),
     firstName  = $("#firstName").val(),
     phone               = $("#phone").val(),
     lastName = $("#lastName").val(),
     message             = $("#message").val();
     

 // Show error `span` when email is invalid

 // Show error `span` when First Name is invalid
 if ( validateName(firstName) ) {
     $("#firstNameError").addClass("invisible");
 } else {
     $("#firstNameError").removeClass("invisible");
     $("#firstNameError").removeClass("invisible");
     return;
 }
 if ( validateName(lastName) ) {
     $("#lastNameError").addClass("invisible");
 } else {
     $("#lastNameError").removeClass("invisible");
     $("#formButton").removeClass("invisible");
     return;
 }
 if ( validatePhone(phone) ) {
    $("#phoneError").addClass("invisible");
} else {
    $("#phoneError").removeClass("invisible");
    $("#formButton").removeClass("invisible");
    return;
}

 if ( validateEmail(notificationEmail ) ) {
     $("#notificationEmailError").addClass("invisible");
 } else {
     $("#notificationEmailError").removeClass("invisible");
     $("#formButton").removeClass("invisible");
     return;
 }
 // Calling local API to set authentication
 // Everything in public is visible for hackers
 // Thus to hide auth calling local backend
 $.ajax({
     "url": "/pitlistingcontact",
     "method": "POST",
     "data": {notificationEmail, firstName, lastName, phone, message}
 })

 .then( result => {
     // On success empty all the input fields.
     $("#notificationEmail").val('');
     $("#firstName").val('');
     $("#lastName").val('');
     $("#phone").val('');
     $("#message").val('');
     
     // Message to notify success submition
     $('#notificationModal').modal('toggle')
     $('#contactModal').modal('toggle')
    // $("#formButton").removeClass("invisible");

     return;
 })
 .catch( err => {
     // Notify in case some error occured
     alert("An error occured.");
     return;
 });
}
