Template.dogo.events ({
'click .btn': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-default bttn'){
      var aid = Session.get('id');
     var id = Positions.insert({ name:'غير العنوان من هنا (على اﻻقل 5 احرف)',
      domaine:'ضع شرح مبسط ووافي هنا (على اﻻقل 16 حرفا)',
      footername:'مﻻحظة,التوقيت (على اﻻقل 6 احرف)',
      aid: aid,
      userId:Meteor.userId(),
      panel: "panel panel-primary"
     });
     Session.set('editing_table',id);
	}
},
'click .btn-info': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-info bttn'){
      var aid = Session.get('id');
     var id = Positions.insert({ name:'غير العنوان من هنا (على اﻻقل 5 احرف)',
      domaine:'ضع شرح مبسط ووافي هنا (على اﻻقل 16 حرفا)',
      footername:'مﻻحظة,التوقيت (على اﻻقل 6 احرف)',
      aid: aid,
      userId:Meteor.userId(),
      panel: "panel panel-info"
     });
     Session.set('editing_table',id);
	}
},
'click .btn-success': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-success bttn'){
      var aid = Session.get('id');
     var id = Positions.insert({ name:'غير العنوان من هنا (على اﻻقل 5 احرف)',
      domaine:'ضع شرح مبسط ووافي هنا (على اﻻقل 16 حرفا)',
      footername:'مﻻحظة,التوقيت (على اﻻقل 6 احرف)',
      aid: aid,
      userId:Meteor.userId(),
      panel: "panel panel-success"
     });
     Session.set('editing_table',id);
	}
},
'click .btn-warning': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-warning bttn'){
      var aid = Session.get('id');
     var id = Positions.insert({ name:'غير العنوان من هنا (على اﻻقل 5 احرف)',
      domaine:'ضع شرح مبسط ووافي هنا (على اﻻقل 16 حرفا)',
      footername:'مﻻحظة,التوقيت (على اﻻقل 6 احرف)',
      aid: aid,
      userId:Meteor.userId(),
      panel: "panel panel-warning"
     });
     Session.set('editing_table',id);
	}
},
'click .btn-danger': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-danger bttn'){
      var aid = Session.get('id');
     var id = Positions.insert({ name:'غير العنوان من هنا (على اﻻقل 5 احرف)',
      domaine:'ضع شرح مبسط ووافي هنا (على اﻻقل 16 حرفا)',
      footername:'مﻻحظة,التوقيت (على اﻻقل 6 احرف)',
      aid: aid,
      userId:Meteor.userId(),
      panel: "panel panel-danger"
     });
     Session.set('editing_table',id);
	}
},

'click .close':function(e,t){
e.preventDefault();
e.stopPropagation();
Soux.remove({_id: Session.get('id')});
Positions.remove({_id: null});
Comment.remove({_id:null});

}	
// 'click #plus': function (e, tmpl) {
// 	e.preventDefault();
// 	e.stopPropagation();

//     if(e.target.className === 'moumi'){
//      var idd = Soux.insert({ sousplus:'sous categorie 1'});
//      Session.set('editing_tablei',idd);
// }
// } 
});

Template.home.events ({
'submit #Ajoutliste': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();

     var sousplus = tmpl.find('#names').value;
     if (sousplus.length > 3) {
     var idd = Soux.insert({ sousplus: tmpl.find('#names').value, 
      userId:Meteor.userId()
     })
     };
     Session.set('editing_tablei',idd);
     tmpl.find('#names').value="";

},
'submit #logout':function(e,t){
	e.preventDefault();

	Meteor.logout(function(error){
		if (error) {
			window.alert('يوجد خطب ما لهذا ﻻ يمكن الخروج من الموقع')
		};
	})

}	
});


// Template.lien.helpers({

// 	sousplus:function() {

// 		 return Soux.find();
// 	}
// });

Template.lien.helpers({
	 liens:function(){
	 	return Soux.find({userId:Meteor.userId()});
	 },

	closes:function(){
	 var iddd = Session.get('id');
	 return iddd == this._id;
	},
	some:function(){
		return Positions.find({aid:this._id}).count();
	},

 editing_lien:function (){
  return Session.equals('editinglien',this._id);
 }


// 	ownere:function(){
// 		var user = Meteor.user();
// 		var userId = user._id;
// 		return this.userId == Meteor.userId();
// 	},

// owner : function(userId, doc) {
// 	var user = Meteor.user();
// 		var userId = user._id;
// return doc && doc.userId === this.userId;
// }
});

Template.lien.events({

'click .close':function(e,t){
e.preventDefault();
e.stopPropagation();
Soux.remove({_id: this._id});
Positions.remove({_id: null});
Comment.remove({_id:null});

},
'click li':function(e,t){
  
  e.preventDefault();
  e.stopPropagation();
  Session.set('id', this._id);
}, 
'dblclick #liensmot': function(e, tmpl){
 e.preventDefault();
 e.stopPropagation();
 Session.set('editinglien',this._id);
},
'keyup .liensmot': function(e, tmpl){
 e.preventDefault();
 e.stopPropagation();
 var sousplus=tmpl.find('.liensmot').value;
 if (e.which === 13) {
  Soux.update(this._id,{$set:{sousplus:tmpl.find('.liensmot').value}});
  Session.set('editinglien',null);
 }
}
});



// Template.home.liens = function () {
// 	return Soux.find();
// };
// Template.home.dogos = function () {
// 	return Positions.find();
// };


Template.dogo.helpers({
  hadanata3ou: function (){
  return  Meteor.user();

 },
 submittedText: function() {
var options = {year: "numeric", month: "long", day: "numeric"};
return new Date().toLocaleString("fr-FR" , options);
},
positions:function(){
	var aid = Session.get('id');
  return Positions.find({aid:aid, userId:Meteor.userId()});
},
 list:function(){
	return Soux.findOne({_id:Session.get('id'), userId:Meteor.userId() });
	},

	// sousplus:function(){
	//  return Soux.findOne({_id:thid._id});	
	// }

});

// Template.home.helpers({
// owner: function() {
// return this.userId == Meteor.userId();
// }
// });


// Template.home.rendered = function () { 
// var width = $(window).width() - 55;
// var height = $(window).height() - 55; 
// $(".lov").width(width);	
// $(".lov").height(height);	
//  }

//  Template.home.helpers({
//   username: function () {
//     return Meteor.user() && Meteor.user().username;
//   }
// });