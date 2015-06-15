if (Meteor.isClient) {

  Template.sidenav.helpers({
    // helper functions go here
    'username': function() {
      return Meteor.user().username;
    }

  });

  Template.sidenav.onRendered(function() {

    $("#nav-icon").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $(this).toggleClass('open');
    });

    // Enable toggle on menu click
    if ($(window).width() < 768) {
      $(".sidebar-nav .side-link a").click(function(e) {
        $("#wrapper").toggleClass("toggled");
        $("#nav-icon").toggleClass('open');
      });
    }

  });

}
