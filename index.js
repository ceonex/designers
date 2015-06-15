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
    Router.go('Home');
  });


}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup


  });
}
