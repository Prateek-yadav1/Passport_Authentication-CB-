const path=require('path')
const express=require('express')
const router=express.Router();
const loginController=require('../controllers/login')
const mypassport=require('../auth/passport');



router.get('/',loginController.getLogin)

router.post('/',mypassport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
  })
router.get('/google',
  mypassport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  mypassport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  });

module.exports=router;