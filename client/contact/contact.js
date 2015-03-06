Template.contact.events({
	'submit #logout':function(e,t){
	e.preventDefault();

	Meteor.logout(function(error){
		if (error) {
			window.alert('يوجد خطب ما لهذا ﻻ يمكن الخروج من الموقع')
		};
	})
},

'submit #devisRapid':function(e,t){
	e.preventDefault();
	e.stopPropagation();
     var from = t.find('#exampleInputPassword1m').value;
     var subject = t.find('#exampleInputPassword1n').value;
     var body = t.find('#exampleInputPassword1j').value;
     var nom = t.find('#exampleInputPassword1s').value;


	 Meteor.call('sendEmail',
    'nwabdou85@yahoo.fr',
    from,
    subject,
    nom + '' + body
   
     );

	 t.find('#exampleInputPassword1m').value='';
     t.find('#exampleInputPassword1n').value='';
     t.find('#exampleInputPassword1j').value='';
     t.find('#exampleInputPassword1s').value='';
}
})