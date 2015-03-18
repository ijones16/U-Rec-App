//App.js
var app = (function() {

	var api = {
		views: {},
		models: {},
		collections: {},
		content: null,
		router: null,
		cms: null,
		init: function() {
			this.content = $("#main"); //Sets initial view for app
			ViewsFactory.menu();
			this.rentalInfo = new TempRentals();
			// this.rentalInfo.fetch();
			// this.rentalInfo.bind('reset', function() {console.log(this.rentalInfo);});
			Backbone.history.start();
			return this;
		},
		changeContent: function(el) {
			this.content.empty().append(el);
			return this;
		}
	};
	var ViewsFactory = {
		menu: function() {
			if(!this.menuView) {
				this.menuView = new api.views.menu({ 
					el: $("#menu") 
				});
			}
			return this.menuView;
		},
		facilityHome: function() {
			if(!this.facilityHomeView) {
				this.facilityHomeView = new api.views.facilityHome({ 
					el: this.content
				});
			}
			return this.facilityHomeView;
		},
		facilityHours: function() {
			if(!this.facilityHoursView) {
				this.facilityHoursView = new api.views.facilityHours({ 
					el: this.content
				});
			}
			return this.aboutView;
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
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		facilityPhotos: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		facilityFeedback: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		outdoorrecHome: function() {
			if(!this.outdoorrecHomeView) {
				this.outdoorrecHomeView = new api.views.outdoorrecHome({ 
					el: this.content
				});
			}
			return this.outdoorrecHomeView;
		},
		outdoorrecTrips: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		outdoorrecPhotos: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		intramuralsHome: function() {
			if(!this.intramuralsHomeHome) {
				this.intramuralsHomeHome = new api.views.intramuralsHome({ 
					el: this.content
				});
			}
			return this.intramuralsHomeHome;
		},
		intramuralsPhotos: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		climbingwallHome: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		climbingwallHours: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		climbingwallPhotos: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
		},
		climingwallEvents: function() {
			if(!this.insertView) {
				this.insertView = new api.views.insertName({ 
					el: this.content
				});
			}
			return this.insertView;
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
	var Router = Backbone.Router.extend({
		routes: {
			"facility": "facilityHome",
			"facility/hours": "facilityHours",
			"facility/programs": "facilityProg",
			"facility/events": "facilityEvents",
			"facility/photos": "facilityPhotos",
			"facility/feedback": "facilityFeedback",
			"outdoorrec": "outdoorrecHome",
			"outdoorrec/Trips": "outdoorrecTrips",
			"outdoorrec/Photos": "outdoorrecPhotos",
			"intramurals": "intramuralsHome",
			"intramurals/photos": "intramuralsPhotos",
			"climbingwall": "climbingwallHome",
			"climbingwall/hours": "climbingwallHours",
			"climbingwall/photos": "climbingwallPhotos",
			"climbingwall/events": "climbingwallEvents",
			"rentals": "rentals",
			"stats": "stats",
			"": "home",
			"login": "login"
		},
		home: function() {
			api.changeContent(ViewsFactory.cms().$el);
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
			// api.rentalInfo.fetch({reset: "true"});
		},
		stats: function() {},
		login: function(valid) {
			api.changeContent(ViewsFactory.login().verify(valid).$el);
		}
	});
	api.router = new Router();

	return api;

})();