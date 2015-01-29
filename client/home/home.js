Template.dogo.events ({
'dblclick .btn': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();
  
 if(e.target.className === 'btn btn-default bttn'){
     var id = Positions.insert({ name:'Clique here to change the title', domaine:'ici tu ecris ton text en gros',footername:'le nom de pays et la ville si tu veux'});
     Session.set('editing_table',id);

	}
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
'click #plus': function (e, tmpl) {
	e.preventDefault();
	e.stopPropagation();

    if(e.target.className === 'moumi'){
     var idd = Soux.insert({ sousplus:'sous categorie 1'});
     Session.set('editing_tablei',idd);
}
}	
});

Template.home.liens = function () {
	return Soux.find();
};
Template.home.dogos = function () {
	return Positions.find();
};

Template.dogo.positions = function () {
	return Positions.find();
};
Template.dogo.helpers({
  hadanata3ou: function (){
  return  Meteor.user().username === 'Admin';

 },
 submittedText: function() {
var options = {year: "numeric", month: "long", day: "numeric"};
return new Date().toLocaleString("fr-FR" , options);
}
});

Template.home.helpers({
beLink: function() {
return Soux.findOne();
}
});


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