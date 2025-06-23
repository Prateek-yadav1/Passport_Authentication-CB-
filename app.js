const express=require('express');
const app=express();
const path=require('path');
const PORT=process.env.PORT || 4444;
const mongoose=require('mongoose');
const session=require('express-session')//without this, passport will not be able to work

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie:{secure: true}
}))



mongoose.connect(process.env.DB_PATH)
.then(()=>{

app.listen(PORT,()=>{
    console.log('httls://localhost:'+PORT);
})
})


