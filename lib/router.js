Router.configure({
Template: 'layout',
// loadingTemplate: 'loading',
waitOn: function() {
return [Meteor.subscribe('positions'), Meteor.subscribe('soux'),, Meteor.subscribe('comment')];
}
});


Router.route('/', function () {
  this.render('home');
}, {
 name: 'home'
});

Router.route('/contact',function(){
	this.render('contact');
},{
	name:'contact'
});


Router.route('/recovery', function(){
	this.render('recovery');
},{
	name:'recovery'
});

Router.route('/log', function(){
	this.render('log');
},{
	name:'log'
});
Router.route('/commentPage', function(){
	this.render('commentPage');
},{
	name:'commentPage'
});

Router.route('/aboutus', function(){
	this.render('aboutus');
},{
	name:'aboutus'
});



var requireLogin = function() {

   if (! Meteor.user()) {
   if (Meteor.loggingIn()){
      this.next();
   }
    else {

       this.render('log');
    } 
} else {

     this.next();
     }


};

Router.onBeforeAction(requireLogin, {except: 'recovery'});