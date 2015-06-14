//Makes your new collection into a variable
var allContacts = new ContactCollection();

//Shows all contacts
allContacts.fetch().done(function(){

  allContacts.each(function(a){
    showCon(a.attributes);

  });
});
//Makes a new contact
var consave = function(e){
  e.preventDefault();
  var con1 = $(this).find('#last').val();
  var con2 = $(this).find('#first').val();
  var con3 = $(this).find('#email').val();
  var con4 = $(this).find('#mobile').val();
  var con5 = $(this).find('#twit').val();
  var con6 = $(this).find('#linkd').val();
  var contact = new Contact({
    last: con1,
    first: con2,
    email: con3,
    mobile: con4,
    twit: con5,
    linkd: con6
  });
  allContacts.add(contact).save().success(function(data){
    showCon(data);

  });
  this.reset();
};


//Shows the contact on page
var showCon = function(contact){
  var contactHTML = template.example(contact);
  // "<li id='" + contact._id +"'>";
  //     contactHTML += "<h5 class ='name'>"+ contact.last;
  //     contactHTML += contact.first +'</h5>';
  //     contactHTML += "<p>" + contact.email + "</p>";
  //     contactHTML += contact.mobile;
  //     contactHTML += contact.twit;
  //     contactHTML += contact.linkd;
  //     contactHTML += "</li>";



$("#contput").prepend(contactHTML);

};

//On submit function

$("#save").on("submit", consave);


