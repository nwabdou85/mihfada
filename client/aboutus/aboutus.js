Template.aboutus.events({
	'submit #logout':function(e,t){
	e.preventDefault();

	Meteor.logout(function(error){
		if (error) {
			window.alert('يوجد خطب ما لهذا ﻻ يمكن الخروج من الموقع')
		};
	})
}
});