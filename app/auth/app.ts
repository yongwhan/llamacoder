import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Configurations
passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((obj: any, done) => {
    done(null, obj);
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: '1038368567685-8ge12v2ifgilme5ue8g65k3th6ih0dji.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

/*
// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: 'YOUR_FACEBOOK_APP_ID',
    clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails']
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));
*/

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile');
    });

    /*
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile');
    });
*/

app.get('/profile', (req, res) => {
    res.send(req.user ? JSON.stringify(req.user) : 'You are not logged in');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
