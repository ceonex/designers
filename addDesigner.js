if (Meteor.isClient) {

  Template.addDesigner.events({

    "submit .new-designer": function(event) {
      // This function is called when the new-designer form is submitted

      var name = event.target.designer_name.value;
      var lastName = event.target.designer_lastName.value;
      var description = event.target.designer_description.value;
      var email = event.target.designer_email.value;
      var website = event.target.designer_website.value;
      var skills = event.target.designer_skills.value;
      var image_path = event.target.designer_thumb.value;
      var rating = event.target.designer_rating.value;

      // Insert Data to Collection
      Designers.insert({
        name: name,
        lastName: lastName,
        description: description,
        email: email,
        website: website,
        skills: skills,
        rating: rating,
        file: image_path,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.designer_name.value = "";
      event.target.designer_lastName.value = "";
      event.target.designer_description.value = "";
      event.target.designer_email.value = "";
      event.target.designer_website.value = "";
      event.target.designer_skills.value = "";
      event.target.designer_rating.value = "";
      event.target.designer_thumb.value = "";

      Router.go('designers'); // Go back to designers list
      return false; // Prevent default form submit
    }
  });

}
