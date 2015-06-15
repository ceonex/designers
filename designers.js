Designers = new Mongo.Collection("designers");

if (Meteor.isClient) {
  Template.designers.helpers({
    designers: function() { //Get list of designers
      return Designers.find({});
    }
  });


  Template.detail.events({
    "click .removeItem": function() {
      Router.go('designers');
      Designers.remove(this._id);
    },
    "click .goback": function() { // Go back after the profile is deleted
      history.back();
    }


  });



}
