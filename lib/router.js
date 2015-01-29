
Router.route('/', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/posts/:_id', {
name: 'dogo',
data: function() { return Positions.findOne(this.params._id); }
});
// Router.route('/lien', {
// name: 'lien',
// });


Router.route('/send', function () {
  this.render('send');
}, {
  name: 'send'
});