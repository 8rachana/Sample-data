const express = require('express');
const router = express.Router();
const department = require('../routes/models/department');



router.get('/getdept',  (req,res) => {
    res.send('DEPARTMENT');
});

router.post('/adddept', async (req,res) => {
   // console.log(req)
    const dept = new department({
        D_Id : req.body.D_Id,
        Name: req.body.Name
       
    });
    
    dept.save()
        .then(data => {
            res.json(data);
    })
    .catch(err => {
        res.json({message :err});
    });
    

});

//Get department By ID
router.get('/getdeptid', async (req,res) => {
    try{
   const post= await department.findById(req.body.deptid);
   res.json(post);
    }catch(err){
        res.json({ message: err});
    }
});

//Upate department By ID
router.patch('/updatedeptid', async (req,res) => {
    try {
    const updateddept = await department.updateOne(
        { _id: req.body.deptid }, 
        { $set :{Name: req.body.Name}}
    );
    res.json(updateddept);
    }catch(err){
        res.json({ message: err});
    }
});

//gets back all the department
router.get('/getalldept', async (req,res) => {
    try{
        const getdept = await department.find();
        res.json(getdept);
    }catch(err){
        res.json({message: err});
    }
});


module.exports= router;

