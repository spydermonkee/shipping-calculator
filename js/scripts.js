var Contact = {
  fullName:function(){
    return this.firstName + " " + this.lastName;
  }
};

$(function(){
  $('form#new-contact').submit(function(event){
    event.preventDefault();
    var inputFirstName = $('#new-first-name').val();
    var inputLastName = $('#new-last-name').val();
    var inputAddress = $('#new-address').val();
    
     
    var currentContact = Object.create(Contact);
    currentContact.firstName = inputFirstName;
    currentContact.lastName = inputLastName;
    currentContact.address = inputAddress;
    
    $('ul#contacts').append('<li><span class="contact">' + currentContact.fullName() + '</span></li>');
  
    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(currentContact.fullName());
      $('.first-name').text(currentContact.firstName);
      $('.last-name').text(currentContact.lastName);
      $('.address').text(currentContact.address);
      
    });
    this.reset();
  }); 

});
















/*$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    this.reset();
  });
});
*/
