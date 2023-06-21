   
const express=require("express");
const Router=express.Router();
const { 
   createSt,getSt,putSt ,stChangepass ,sendforgetPass,delSt ,loginSt,getsingleSt,
   createuploadtask,getuploadtask,deluploadtask,putuploadtask,
     
   createEnrollCorses,getEnrollCorses,getSingleEnrollCorses,putEnrollCorses,delEnrollCorses
         }=require('../../controllers/students/StudentController')
const tast_assignment_upload=require('../../multer/students/task_upload')
const studentProfile_upload=require('../../multer/students/StudentProfile')

Router.route('/enroll').post(createEnrollCorses);
Router.route('/enroll').get(getEnrollCorses);
Router.route('/enroll/:student').get(getSingleEnrollCorses);
Router.route('/enroll/:_id').put(putEnrollCorses);
Router.route('/enroll/:_id').delete(delEnrollCorses);




Router.route('/students').post(createSt);
Router.route('/students').get(getSt);
Router.route('/students/:_id').get(getsingleSt);
Router.route('/students/:_id').put(studentProfile_upload.single('profilePic'),putSt);
Router.route('/students/:_id').delete(delSt);
Router.route('/studentlogin').post(loginSt);
Router.route("/mail").get(sendforgetPass);
Router.route("/api/userchangepassword/:token").put(stChangepass)

//////
Router.route('/uploadtask').post(tast_assignment_upload.single('img'),createuploadtask);
Router.route('/uploadtask').get(getuploadtask);
Router.route('/uploadtask/:regno').put(tast_assignment_upload.single('img'),putuploadtask);
Router.route('/uploadtask/:regno').delete(deluploadtask);

   module.exports=Router;        