const express = require('express');
const router = express.Router();
const users = require('../routes/models/users');
const validator = require('validator');

router.get('/',  (req,res) => {
    res.send('INSIDE USERAPI');
});

//adding user
router.post('/adduser', async (req,res) => {
   // console.log(req)
    valid = false;
    if(validator.isEmail(req.body.Email)&&validator.isMobilePhone(req.body.Mobile)){
          valid = true;
    }
    
   if(valid){
    const post = new users({

        Person_id: req.body.Person_id,
        Name: req.body.Name,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        DOB: req.body.DOB,
        CreatedAt: req.body.CreatedAt,
        ModifiedAt: req.body.ModifiedAt,
        Department: req.body.Department
    });
    
    post.save()
        .then(data => {
            res.json(data);
    })
    .catch(err => {
        res.json({message :err});
    });
}
else{
        res.json("invalid credentials");
}
});

//Upate User By ID
router.patch('/updateuserid', async (req,res) => {
    try {
    const updatedUser = await users.updateOne(
        { _id: req.body.userid }, 
        { $set :{Name: req.body.Name}}
    );
    res.json(updatedUser);
    }catch(err){
        res.json({ message: err});
    }
});

//gets back all the users
router.get('/getallusers', async (req,res) => {
    try{
        const getusers = await users.find();
        res.json(getusers);
    }catch(err){
        res.json({message: err});
    }
});

//Get User By ID
router.get('/getuserid', async (req,res) => {
    try{
   const post= await users.findById(req.body.userid);
   res.json(post);
    }catch(err){
        res.json({ message: err});
    }
});

//delete user
router.delete('/deleteuser',async (req,res) => {
    try{
   const removedPost = await users.remove({ _id: req.body.userid });
   res.json(removedPost);
    }catch(err){
        res.json({ message: err});
    }
});

module.exports= router;

