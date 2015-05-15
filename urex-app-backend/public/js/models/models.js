var Announcement = Backbone.Model.extend({
  defaults: {
    id: null,
    title: "New Title",
    message: "Details",
    date: "05/22/1993",
    category_id: null
  }
});

var Image = Backbone.Model.extend({
  defaults: {
    id: null,
    file_location: null,
    caption: "Sample Title",
    file: null,
    filename: null,
    extension: null
    // category_id: null
  }
});

var Program = Backbone.Model.extend({
  defaults: {
    id: null,
    title: "Sample Title",
    description: "Sample Description",
  }
});

var User = Backbone.Model.extend({
  defaults: {
    id: null,
    userrname: "Username",
    password: "password",
    first_name: "fName",
    last_name: "lName",
    email: null,
    category_id: null,
  }
});

var Event = Backbone.Model.extend({
  defaults: {
    id: null,
    title: "Sample Title",
    description: "Sample Description",
    image_url: ""
  },
});

var Rental = Backbone.Model.extend({
	defaults: {
		name: "Item",
		student_pricing_1: 10,
		student_pricing_2: 10,
		student_pricing_3: 10,
		student_pricing_4: 10,
		faculty_pricing_1: 10,
		faculty_pricing_2: 10,
		faculty_pricing_3: 10,
		faculty_pricing_4: 10
	}
});

var Hours = Backbone.Model.extend({
});
