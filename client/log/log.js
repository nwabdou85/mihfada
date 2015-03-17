Meteor.startup(function(){
	Session.set('resepass', false);

})


Template.log.rendered = function (){
$('<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5506d3154f468857" async="async"><\/script>').appendTo(document.body);
  

   // $(function(){
  
   //  $(window).resize(function(){ // On resize
   //      console.log($(window).height(), $(window).width() );
   //      $('#sign').css({'height':(($(window).innerHeight)) +'px'});
   //      console.log($('#sign').height());
   //  });
   //  $(window).resize(function(){ // On resize
   //      $('#sign').css({'width':(($(window).width()))+'px'});
   //  });
   //  });

}


Template.log.events({
	"submit #inscription":function(e,t){
		e.preventDefault();
        e.stopPropagation();
    


            var username=t.find('#inputEmail3').value, 
			    email=t.find('#inputEmail4').value,
			    password=t.find('#inputPassword3').value;
        

       if (username.length > 4 && password.length > 4) {
            Accounts.createUser({

            	
			usrername:t.find('#inputEmail3').value, 
			email:t.find('#inputEmail4').value,
			password:t.find('#inputPassword3').value,

			profile:{
				fullname:t.find('#inputEmail3').value

			}
		

            },function(err) {
                if (err) {
                    if (err.message === 'Email already exists. [403]') {
                        window.alert('هذا اﻻيميل مستعمل');
                    } else {
                        window.alert('اسف, خطب ما حدث');
                    }
                } else {
                    window.alert('ممتاز لقد تم انشاء حسابك بنجاح');
                }
            });
        } else {
            
               window.alert('دقق جيدا في المعلومات التي ادخلتها, كلمة السر واﻻسم يجب ات يتعدى واحد منهم 4 احرف');

        }
        },






	// 	Accounts.createUser({
	// 		usrername:t.find('#inputEmail3').value, 
	// 		email:t.find('#inputEmail4').value,
	// 		password:t.find('#inputPassword3').value,

	// 		profile:{
	// 			fullname:t.find('#inputEmail3').value

	// 		}
	// 	}, function(error){

	// 		if (error) {

	// 		if (err.message === 'Email already exists. [403]') {
 //                   window.alert('هذا اﻻيميل مستعمل');
 //              } else {
 //                   window.alert('اسف, خطب ما حدث');
 //                 }
	// 		} else {
                 
 //                 window.alert('ممتاز لقد تم انشاء حسابك بنجاح');

	// 		}


	// 	});

	// },

	'submit #login':function(e,t){
		e.preventDefault();
        e.stopPropagation();
        var unam = t.find('#exampleInputEmail3').value;
		var password = t.find('#exampleInputPassword3').value;

        Meteor.loginWithPassword(unam, password, function(error){
        	if (error) {

        		if (error.message === 'User not found [403]') {
                        window.alert('هذا المستخدم غير موجود');
                    } else {
                      window.alert('اﻻيميل او كلمة السر خاطئة')

                    }
        	};

        })

	}
})


Template.phrase.helpers({
	'resetPassword':function(){

		if (Accounts._resetPasswordToken) {
			Session.set('resepass', true);
		}
		 return Session.get('resepass');

	}
});




Template.facebook.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});




