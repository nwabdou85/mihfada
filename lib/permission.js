hadanata3ou = function (userId, doc){
	return !! userId && Meteor.user().username === 'Admin';
}