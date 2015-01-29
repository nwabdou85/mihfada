Positions = new Meteor.Collection('positions');
Soux = new Meteor.Collection('soux');


Positions.allow({
insert: function(userId, doc) {return hadanata3ou(userId, doc);},
update: function(userId, doc) {return hadanata3ou(userId, doc);},
remove: function(userId, doc) {return hadanata3ou(userId, doc);},

});

Soux.allow({
insert: function(userId, doc) {return hadanata3ou(userId, doc);},
update: function(userId, doc) {return hadanata3ou(userId, doc);},
remove: function(userId, doc) {return hadanata3ou(userId, doc);},

});

