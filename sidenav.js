if (Meteor.isClient) {

  Template.sidenav.helpers({
    // helper functions go here
    'username': function() {
      return Meteor.user().username;
    }

  });

  Template.sidenav.onRendered(function() {
    // Enable toggle on menu click
    $("#nav-icon").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $(this).toggleClass('open');
    });

    // Trigger menu each time side menu is clicked
    if ($(window).width() < 768) { // only trigger on small devices 
      $(".sidebar-nav .side-link a").click(function(e) {
        $("#wrapper").toggleClass("toggled");
        $("#nav-icon").toggleClass('open');
      });
    }

  });

}
