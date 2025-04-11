// middleware/is-signed-in.js

const isSignedIn = (req, res, next) => {

    // if the user has valid session, proceed
    if (req.session.user) return next();

    //if not, send them to sign in page
    res.redirect('/auth/sign-in');
  };
  
  module.exports = isSignedIn;
  