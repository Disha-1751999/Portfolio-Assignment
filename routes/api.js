import express from "express";
import * as AdminController from '../src/controllers/AdminController.js' 
import * as DashboardController from '../src/controllers/DashboardController.js'

const router=express.Router();


//admin

router.post('/login',AdminController.Login)
router.post('/logout',AdminController.Logout)


router.post('/sendMail',AdminController.SendMailController)

router.post('/saveService',DashboardController.SaveServicesController)
router.get('/readService',DashboardController.ReadServicesController)
router.post('/removeService/:id',DashboardController.RemoveServicesController)

router.post('/saveBlog',DashboardController.SaveBlogController)
router.get('/readBlog',DashboardController.ReadBlogController)
router.post('/removeBlog/:id',DashboardController.RemoveBlogController)

router.post('/saveTeam',DashboardController.SaveTeamController)
router.get('/readTeam',DashboardController.ReadTeamController)
router.post('/removeTeam/:id',DashboardController.RemoveTeamController)

export default router;