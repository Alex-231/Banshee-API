// app/routes.js

   module.exports = function(app, passport, latestverion) {



     // server routes ===========================================================
     // handle things like api calls
     // authentication routes

     // route to handle creating goes here (app.post)
     // route to handle delete goes here (app.delete)

     // frontend routes =========================================================
     // route to handle all angular requests
     app.get('/', function(req, res) {
         res.render('index.ejs', {
           number : latestverion.number,
           download : latestverion.download,
         }); // load our public/index.html file
     });

     app.get('/update', function(req, res) {
         res.render('update.ejs', {
           number : latestverion.number,
           download : latestverion.download,
         }); // load our public/index.html file
     });

     app.get('/version', function(req, res) {
         res.render('version.ejs', {
           number : latestverion.number,
           download : latestverion.download
         }); // load our public/index.html file
     });

     app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage')});// load our public/index.html file
     });

     app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage')}); // load our public/index.html file
     });

     app.get('/profile', isLoggedIn, function(req, res) {
         res.render('profile.ejs', {
             user : req.user // get the user out of session and pass to template
         });
     });

     app.get('/play', isLoggedIn, function(req, res) {
         res.render('play.ejs', {
             user : req.user // get the user out of session and pass to template
         });
     });

     app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
     });

     // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    }));

   };

   function isLoggedIn(req, res, next){

     if (req.isAuthenticated())
        return next();


     res.redirected('/');
   }
