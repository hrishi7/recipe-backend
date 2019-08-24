const express = require("express");
const router = express.Router();


var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'hrishi7',
    api_key:'541159897319149',
    api_secret:'8w0_0un3DGPm5_auzEgbCssRg4w'
})

  //@route  POST api/fileUpload/
  //@desc   Post for fileipload
  //@access public
  router.post("/", (req, res, next) => {
    const file = req.files.photo;
     cloudinary.uploader.upload(file.tempFilePath, (err, result)=>{
         if(err){
             return res.json({ success:false,err});
         }
         return res.json({ success: true,result});
     })
   });


 //@route  GET api/fileUpload/test
  //@desc   testing
  //@access public
  router.get("/test", (req, res) => {
    res.json('ok fileUpload');
   });




//export file
module.exports = router;