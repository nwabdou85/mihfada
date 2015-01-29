Template.position.events({
'click .panel-heading': function(e, tmpl){
 e.preventDefault();
 e.stopPropagation();
 Session.set('editing_tablename',this._id);
}, 


'click .close' : function(e, tmpl){
 Positions.remove({_id:this._id});
},

'keyup .tablename': function(e, tmpl){
 e.preventDefault();
 e.stopPropagation();
 if (e.which === 13) {
  Positions.update(this._id,{$set:{name:tmpl.find('.tablename').value}});
  Session.set('editing_tablename',null);
 }
},
'click .panel-body' : function(e,tmpl){
  e.preventDefault();
  e.stopPropagation();
  Session.set('editing_field', this._id);
 },
 'click .panel-footer' : function(e,tmpl){
  e.preventDefault();
  e.stopPropagation();
  Session.set('editing_footer', this._id);
 },
 'keyup .efield' :function(e, tmpl){
  e.preventDefault();
  e.stopPropagation();
  var fieldname = tmpl.find('.efield').value;
 if (fieldname && e.which == 13) {
  Positions.update(this._id,{$set:{domaine:fieldname}});
  Session.set('editing_field',null);
 }
 },
 'keyup .footer' :function(e, tmpl){
  e.preventDefault();
  e.stopPropagation();
  var fieldname = tmpl.find('.footer').value;
 if (fieldname && e.which == 13) {
  Positions.update(this._id,{$set:{footername:fieldname}});
  Session.set('editing_footer',null);
 }
 }
});


 Template.position.rendered = function () {
 if (Meteor.user().username === 'Admin') { 

	$('.modal').draggable({
		handle: '.modal-header',
		// stop:function(e,ui){
  //        var left = ui.position.left;
  //         var top = ui.position.top;
  //         Positions.update($(this).attr('id'),{$set:{left:lfet + 'px',top:top + 'px'}});
		// }
	})
}
 }

 
 Template.position.editing_tablename = function (){
 	return Session.equals('editing_tablename',this._id) && Meteor.user().username === 'Admin' ;

 };

Template.position.helpers({
  hadanata3ou: function (){
  return  Meteor.user().username === 'Admin';

 }
});

 // Template.position.dbfields = function (){
 // 	return  DBfields.find({tableid:this._id});
 // };
 Template.position.editing_field = function(){
  return Session.equals('editing_field',this._id) && Meteor.user().username === 'Admin' ;
};
 Template.position.editing_footer = function(){
  return Session.equals('editing_footer',this._id) && Meteor.user().username === 'Admin' ;
}






