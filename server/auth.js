import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import config from "../client_id.json";
import User from "./models/user";

const mapProfile = ({ id, displayName, photos }) => ({
  id,
  name: displayName,
  photo: Array.isArray(photos) ? photos[0].value : null
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.web.client_id,
      clientSecret: config.web.client_secret,
      callbackURL: "http://localhost:1234/auth/google/callback"
    },
    async (token, tokenSecret, profile, done) => {
      // eslint-disable-next-line no-underscore-dangle
      if (profile._json.domain !== "iterate.no") {
        return done(new Error("Wrong domain!"));
      }
      const mappedUser = mapProfile(profile);
      console.log("Logged in user", mappedUser);
      await User.upsert(mappedUser);
      const user = await User.findByPk(mappedUser.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  if (user) {
    done(null, user.get());
  } else {
    done("Failed to retrieve user", null);
  }
});

const initialize = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      hd: "iterate.no",
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read"
      ]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};

export default initialize;
