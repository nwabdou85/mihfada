Meteor.startup(function() {
    var username = "postmaster@sandbox46c5050bc63a4a9a99bd87aab077ab33.mailgun.org";
    var password = "6b8d4fe6d43901076acfdbe1507dbea7";
    var server = "smtp.mailgun.org";
    var port = "587";

   process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@' + encodeURIComponent(server) + ':' + port;
});


Meteor.methods({
    sendEmail: function (to, from, subject, text) {
         check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
            
        });
    }
  });


// Meteor.methods({
//   sendEmail: function (to, from, subject, text) {
//         check(to, String);
//     check(from, String);
//     check(subject, String);
//     check(text, String);


//     // Let other method calls from the same client start running,
//     // without waiting for the email sending to complete.
//     this.unblock();

// console.log(process.env.MAIL_URL);

//     Email.send({
//       to: to,
//       from: from,
//       subject: subject,
//       text: text
//     });
//   }
// });