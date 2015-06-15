Designers = new Mongo.Collection("designers");

if (Meteor.isClient) {
  Template.designers.helpers({
    designers: function() {
      return Designers.find({});
    }
  });


  Template.detail.events({
    "click .removeItem": function() {
      Router.go('designers');
      Designers.remove(this._id);
    },
    "click .goback": function() {
      history.back();
    }


  });



}
