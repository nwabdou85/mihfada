Meteor.startup(function(){
	Session.set('resepass', false);

})

Template.recovery.helpers({
	'resetPassword':function(){

		if (Accounts._resetPasswordToken) {
			Session.set('resetToken', Accounts._resetPasswordToken );
			Session.set('resepass', true);
		}
		 return Session.get('resepass');

	}
});


Template.recovery.events({
	'submit #forgot-password':function(e,t){
	e.preventDefault();
    var email = t.find('#user-email').value;
    // Accounts.forgotPassword({email: email},function(error){
    //   if (error) {
    //   	window.alert('ﻻ يمكننا ارسال رابط تغيير كلمة السر');
    //   }
    // })


         Accounts.forgotPassword({email: email}, function(err) {
                if (err) {
                    if (err.message === 'User not found [403]') {
                        window.alert('هذا اﻻيميل غير موجود');
                    } else {
                        window.alert('متاسفين, شئ ما ليس على ما يرام');
                    }
                } else {
                    window.alert('اﻻيميل قد لرسل. افحص بريدك اﻻلكتروني');
                    Router.go('/log');
                }
            });

},

'submit #set-new-password':function(e,t){
	e.preventDefault();

	var newspassord=t.find('#new-password').value;
    Accounts.resetPassword(Session.get('resetToken'),newspassord, function(error){
    	if (error) {
    		window.alert(' لم يحدث تغيير كلمة السر');
    	} else {

    		window.alert('تم تغيير كلمة السر بنجاح');
    		Router.go('home');
    	}

    })
}

});