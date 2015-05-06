//App.js
var app = (function() {

	var api = {
		views: {},
		models: {},
		collections: {},
		content: null,
		router: null,
		cms: null,
		viewsFactory: null,
		init: function() {
			this.content = $("#insert"); //Sets initial view for app
			Backbone.history.start();
			return this;
		},
		changeContent: function(el) {
			this.content.empty().append(el);
			return this;
		}
	};
	var ViewsFactory = {
		main: function() {
			return $("#main").html();
		},
		facilityHome: function() {
			this.facilityHomeView = new announcementView({
				fetchURL: "../urex-app-backend/public/api/announcement/category/1",
				template: _.template($("#announcementTemplate").html())
			});
			return this.facilityHomeView;
		},
		facilityHours: function() {
			if(!this.facilityHoursView) {
				this.facilityHoursView = new api.views.facilityHours({
					el: this.content
				});
			}
			return this.facilityHoursView;
		},
		facilityProg: function() {
			if(!this.facilityProgView) {
				this.facilityProgView = new api.views.facilityProg({
					el: this.content
				});
			}
			return this.facilityProgView;
		},
		facilityEvents: function() {
			if(!this.facilityEventsView) {
				this.facilityEventsView = new api.views.facilityEvents({
					el: this.content
				});
			}
			return this.facilityEventsView;
		},
		facilityPhotos: function() {
			this.facilityPhotosView = new imageView({
				url: "../urex-app-backend/public/api/image/category/1",
				template: _.template($("#imageTemplate").html())
			});
			return this.facilityPhotosView;
		},
		facilityFeedback: function() {
			if(!this.facilityFeedbackView) {
				this.facilityFeedbackView = new api.views.facilityFeedback({
					el: this.content
				});
			}
			return this.facilityFeedbackView;
		},
		outdoorrecHome: function() {
			this.outdoorrecHomeView = new announcementView({
				el: this.content,
				fetchURL: "../urex-app-backend/public/api/announcement/category/2",
				template: _.template($("#announcementTemplate").html())
			});
			return this.outdoorrecHomeView;
		},
		outdoorrecTrips: function() {
			if(!this.outdoorrecTripsView) {
				this.outdoorrecTripsView = new api.views.outdoorrecTrips({
					el: this.content
				});
			}
			return this.outdoorrecTripsView;
		},
		outdoorrecPhotos: function() {
				this.outdoorrecPhotosView = new imageView({
					url: "../urex-app-backend/public/api/image/category/2",
					template: _.template($("#imageTemplate").html())
				});
			return this.outdoorrecPhotosView;
		},
		intramuralsHome: function() {
			this.intramuralsHomeHome = new announcementView({
				el: this.content,
				fetchURL: "../urex-app-backend/public/api/announcement/category/3",
				template: _.template($("#announcementTemplate").html())
			});
			return this.intramuralsHomeHome;
		},
		intramuralsPhotos: function() {
				this.intramuralsPhotosView = new imageView({
					url: "../urex-app-backend/public/api/image/category/3",
					template: _.template($("#imageTemplate").html())
				});
			return this.intramuralsPhotosView;
		},
		climbingwallHome: function() {
				this.climbingwallHomeView = new announcementView({
					el: this.content,
					fetchURL: "../urex-app-backend/public/api/announcement/category/4",
					template: _.template($("#announcementTemplate").html())
				});
			return this.climbingwallHomeView;
		},
		climbingwallHours: function() {
			if(!this.climbingwallHoursView) {
				this.climbingwallHoursView = new api.views.climbingwallHours({
					el: this.content
				});
			}
			return this.climbingwallHoursView;
		},
		climbingwallPhotos: function() {
				this.climbingwallPhotosView = new imageView({
					url: "../urex-app-backend/public/api/image/category/4",
					template: _.template($("#imageTemplate").html())
				});
			return this.climbingwallPhotosView;
		},
		climbingwallEvents: function() {
			if(!this.climingwallEventsView) {
				this.climingwallEventsView = new api.views.climbingwallEvents({
					el: this.content
				});
			}
			return this.climingwallEventsView;
		},
		login: function() {
			if(!this.loginView) {
				this.loginView = new api.views.login({
					el: this.content
				});
			}
			return this.loginView;
		},
		stats: function() {
			if(!this.statsView) {
				this.statsView = new api.views.stats({
					el: this.content
				});
			}
			return this.statsView;
		},
		rentals: function() {
			if(!this.rentalsView) {
				this.rentalsView = new api.views.rentals({
					collection: api.rentalInfo
				});
			}
			return this.rentalsView;
		}
	};

	api.viewsFactory = ViewsFactory;

	// api.facilityView = ViewsFactory.facilityHome();

	var Router = Backbone.Router.extend({
		routes: {
			"facility": "facilityHome",
			"facility/hours": "facilityHours",
			"facility/programs": "facilityProg",
			"facility/programs/remove/:id": "facilityRemoveProg",
			"facility/events": "facilityEvents",
			"facility/photos": "facilityPhotos",
			"facility/feedback": "facilityFeedback",
			"facility/remove/:id": "facilityRemove",
			"outdoorrec": "outdoorrecHome",
			"outdoorrec/trips": "outdoorrecTrips",
			"outdoorrec/photos": "outdoorrecPhotos",
			"outdoorrec/remove/:id": "outdoorrecRemove",
			"intramurals": "intramuralsHome",
			"intramurals/photos": "intramuralsPhotos",
			"climbingwall": "climbingwallHome",
			"climbingwall/hours": "climbingwallHours",
			"climbingwall/photos": "climbingwallPhotos",
			"climbingwall/events": "climbingwallEvents",
			"rentals": "rentals",
			"": "home",
		},
		home: function() {
			api.changeContent(ViewsFactory.main());
		},
		facilityHome: function() {
			api.changeContent(ViewsFactory.facilityHome().$el);
		},
		facilityHours: function() {
			// alert("Hit about");
			api.changeContent(ViewsFactory.facilityHours().$el);
			// ViewsFactory.about.render();
		},
		facilityProg: function() {
			api.changeContent(ViewsFactory.facilityProg().$el);
		},
		facilityEvents: function() {
			api.changeContent(ViewsFactory.facilityEvents().$el);
		},
		facilityPhotos: function() {
			api.changeContent(ViewsFactory.facilityPhotos().$el);
		},
		facilityFeedback: function() {
			api.changeContent(ViewsFactory.facilityFeedback().$el);
		},
		outdoorrecHome: function() {
			api.changeContent(ViewsFactory.outdoorrecHome().$el);
		},
		outdoorrecTrips: function() {
			api.changeContent(ViewsFactory.outdoorrecTrips().$el);
		},
		outdoorrecPhotos: function() {
			api.changeContent(ViewsFactory.outdoorrecPhotos().$el);
		},
		intramuralsHome: function() {
			api.changeContent(ViewsFactory.intramuralsHome().$el);
		},
		intramuralsPhotos: function() {
			api.changeContent(ViewsFactory.intramuralsPhotos().$el);
		},
		climbingwallHome: function() {
			api.changeContent(ViewsFactory.climbingwallHome().$el);
		},
		climbingwallHours: function() {
			api.changeContent(ViewsFactory.climbingwallHours().$el);
		},
		climbingwallPhotos: function() {
			api.changeContent(ViewsFactory.climbingwallPhotos().$el);
		},
		climbingwallEvents: function() {
			api.changeContent(ViewsFactory.climbingwallEvents().$el);
		},
		rentals: function() {
			api.changeContent(ViewsFactory.rentals().$el);
		}
	});
	api.router = new Router();

	return api;

})();
