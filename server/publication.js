Meteor.publish("positions",function(){
 return Positions.find();
});
Meteor.publish("soux",function(){
 return Soux.find();
});

Meteor.publish("comment",function(){
 return Comment.find();
});