Router.route('/', function() {
  this.layout('ApplicationLayout', {
    //set a data context for the whole layout
    data: {
      title: 'Welcome ' //+ Meteor.user().username
    }
  });

  // will just get the data context from layout
  this.render('Home');
});

Router.route('/home', function() {
  this.layout('ApplicationLayout', {
    //set a data context for the whole layout
    data: {
      title: 'Welcome ' //+ Meteor.user().username
    }
  });

  // will just get the data context from layout
  this.render('Home');
});

Router.route('/designers', function() {
  this.layout('ApplicationLayout', {
    // set a data context for the whole layout
    data: {
      title: 'Designers'
    }
  });
  this.render('designers', {
    data: {
      title: 'Designers'
    }
  });
});


Router.route('/addDesigner', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'Add Designer'
    }
  });
  this.render('addDesigner', {
    data: {
      title: 'Add Designer'
    }
  });
});

Router.route('/detail/:_id', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'Designer Details'
    }
  });

  this.render('detail', {
    data: Designers.findOne({
      _id: this.params._id
    })


  });

});

Router.route('/editDesigner/:_id', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'Edit Designer Details'
    }
  });

  this.render('editDesigner', {
    data: Designers.findOne({
      _id: this.params._id
    })


  });

});



if (Meteor.isClient) {

  Template.topbar.helpers({
    // helper functions go here
    'username': function() {
      return Meteor.user().username;
    }
  });

  Accounts.ui.config({

    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'

  });

  Accounts.onLogin(function(user) {
    //console.log(Meteor.users)
    Router.go('/home');
  });



  //Meteor.subscribe('latestx');

  Template.latest.helpers({
    // helper functions go here
    latestdesigners: function() { //Get list of designers
      return Designers.find({}, {
        limit: 1
      });

    }
  });

}



if (Meteor.isServer) {

  // Meteor.publish('latestx', function() {
  //   //default limit if none set
  //   return Designers.find({}, {
  //     limit: 1
  //   });
  // });

  Meteor.startup(function() {
    // code to run on server at startup


  });
}
