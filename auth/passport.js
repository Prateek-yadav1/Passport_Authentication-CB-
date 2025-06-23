// I eill create all the strategies in this file
//the strategies like : local,facebook,google etc

const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('..models/user');

//for local strategies

passport.use(new LocalStrategy(
  function(username, password, done) {//done is a callback
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
    //   if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user,done){
    done(null,user.id);
})
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        done(err,user)
    });
});

module.exports=passport;