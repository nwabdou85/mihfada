Meteor.startup(function() {
   $('html').attr('dir', 'rtl');
   $('html').attr('lang', 'ar');
});


Template.position.events({
'click h6': function(e, tmpl){
 e.preventDefault(); 
 e.stopPropagation();
 Session.set('editing_tablename',this._id);
}, 


'click .close' : function(e, tmpl){
 Positions.remove({_id:this._id});
 Comment.remove({_id: null});
},

'keyup .tablename': function(e, tmpl){
 e.preventDefault();
 e.stopPropagation();
 var name=tmpl.find('.tablename').value;
 if (e.which === 13 && name.length > 4) {
  Positions.update(this._id,{$set:{name:tmpl.find('.tablename').value}});
  Session.set('editing_tablename',null);
 }
},
'click .panel-body' : function(e,tmpl){
  e.preventDefault();
  e.stopPropagation();
  Session.set('editing_field', this._id);
 },
 'click .muted' : function(e,tmpl){
  e.preventDefault();
  e.stopPropagation();
  Session.set('editing_footer', this._id);
 },
 'keyup .efield' :function(e, tmpl){
  e.preventDefault();
  e.stopPropagation();
  var fieldname = tmpl.find('.efield').value;
 if (fieldname.length > 15 && e.which == 13) {
  Positions.update(this._id,{$set:{domaine:fieldname}});
  Session.set('editing_field',null);
 }
 },
 'keyup .footer' :function(e, tmpl){
  e.preventDefault();
  e.stopPropagation();
  var fieldname = tmpl.find('.footer').value;
 if (fieldname.length > 5 && e.which == 13) {
  Positions.update(this._id,{$set:{footername:fieldname}});
  Session.set('editing_footer',null);
 }
 },
 'click .glyphicon':function(e,t){

  if (e.target.className === 'glyphicon glyphicon-comment') {
       Router.go('commentPage');
       Session.set('commentId', this._id);

  }
 }

});




Template.position.helpers({
  hadanata3ou: function (){
  return  Meteor.user();

 },
 somecomments:function(){
  return Comment.find({commentId:this._id}).count();
 }, 
 editing_tablename:function (){
  return Session.equals('editing_tablename',this._id);
 },
 editing_field:function(){
  return Session.equals('editing_field',this._id);
},
editing_footer:function(){
  return Session.equals('editing_footer',this._id);
}
});

 // Template.position.dbfields = function (){
 // 	return  DBfields.find({tableid:this._id});
 // };
//  Template.position.editing_field = function(){
//   return Session.equals('editing_field',this._id);;
// };
//  Template.position.editing_footer = function(){
//   return Session.equals('editing_footer',this._id);
// }














Template.commentPage.events({
  'submit #logout':function(e,t){
  e.preventDefault();
  e.stopPropagation();
  Meteor.logout(function(error){
    if (error) {
      window.alert('يوجد خطب ما لهذا ﻻ يمكن الخروج من الموقع')
    };
  })

}
})



Template.commentSubmit.events({
 'submit .form':function(e,t){
  e.preventDefault();
  e.stopPropagation();
  var body = t.find('#body').value;
  var commentId = Session.get('commentId');
  if (body.length > 3) {
  Comment.insert({body:body,
   commentId:commentId,
   userId:Meteor.userId()
    });
  t.find('#body').value="";
}
 }

});

Template.commentItem.helpers({
editing_body:function (){
  return Session.equals('editingBody',this._id);
 }
});

Template.commentItem.events({
'click #closes':function(){
  Comment.remove({_id:this._id});
}, 
 'click p': function(e, tmpl){
 e.preventDefault(); 
 e.stopPropagation();
 Session.set('editingBody',this._id);
},
'keyup .tablebody' :function(e, tmpl){
  e.preventDefault();
  e.stopPropagation();
  var body = tmpl.find('.tablebody').value;
 if (e.which == 13) {
  Comment.update(this._id,{$set:{body:body}});
  Session.set('editingBody',null);
 }
}
});

Template.commentPage.helpers({
  comments:function(){
    var commentId = Session.get('commentId');
    return Comment.find({commentId:commentId, userId:Meteor.userId()});
  }
})
