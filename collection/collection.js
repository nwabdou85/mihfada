Positions = new Meteor.Collection('positions');
Soux = new Meteor.Collection('soux');
Comment = new Meteor.Collection('comment');


Positions.allow({
insert: function(userId, doc) {return hadanata3ou(userId, doc);},
update: function(userId, doc) {return hadanata3ou(userId, doc);},
remove: function(userId, doc) {return hadanata3ou(userId, doc);},

});

Soux.allow({
insert: function(userId, doc) {return !! userId;},
update: function(userId, doc) {return hadanata3ou(userId, doc);},
remove: function(userId, doc) {return !! userId;},

});

Comment.allow({
insert: function(userId, doc) {return !! userId;},
update: function(userId, doc) {return hadanata3ou(userId, doc);},
remove: function(userId, doc) {return !! userId;},

});

