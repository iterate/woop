const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const config = require("./client_id.json");

const mapProfile = ({ id, displayName, photos }) => ({
  id,
  name: displayName,
  photo: Array.isArray(photos) ? photos[0] : null
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.web.client_id,
      clientSecret: config.web.client_secret,
      callbackURL: "http://localhost:1234/auth/google/callback"
    },
    function(token, tokenSecret, profile, done) {
      console.log("profile", profile);
      done(null, mapProfile(profile));
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const initialize = app => {
  app.use(passport.initialize());

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/plus.login"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"), function(
    req,
    res
  ) {
    // Successful authentication, redirect home.
    res.redirect("/");
  });
};

module.exports = { initialize };
