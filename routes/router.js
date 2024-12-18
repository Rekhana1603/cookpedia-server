const express = require("express")
const recipeController = require('../controllers/recipeController')
const testimonyController = require("../controllers/testimonyController")
const userController = require('../controllers/userController')
const downloadRecipeController = require('../controllers/downloadRecipeController')
const saveRecipeController = require('../controllers/saveRecipeController')
const jwtMiddleware = require("../middlewares/jwtMiddleware")

const router = new express.Router()

// all recipes
router.get("/all-recipes",recipeController.getAllRecipeController)
// add Testimony
router.post("/add-testimony",testimonyController.addTestimonyController)
// add user
router.post("/register",userController.addUserController)
// login
router.post("/login",userController.loginController)
// view single recipe
router.get("/recipe/:id/view",jwtMiddleware,recipeController.getARecipeController)
// related recipe
router.get("/related-recipes",jwtMiddleware,recipeController.relatedRecipeController)
// download recipe
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)
// save recipe
router.post("/recipe/:id/save",jwtMiddleware,saveRecipeController.addTosaveRecipeController)
// get user saved recipe
router.get("/get-save-recipes",jwtMiddleware,saveRecipeController.getUserSavedRecipeController)
// delete user saved recipe
router.delete("/save-recipes/:id/remove",jwtMiddleware,saveRecipeController.removeSaveRecipeController)
// get user download recipe
router.get("/user-downloads",jwtMiddleware,downloadRecipeController.getUserDownloadListController)
// edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)
// all-users
router.get("/all-users",jwtMiddleware,userController.getAllUsersController)
// all-download-list
router.get("/download-list",jwtMiddleware,downloadRecipeController.getAllDownloadListController)
// get-testimony
router.get("/all-feedback",jwtMiddleware,testimonyController.getAllFeedbackController)
// update-testimony
router.get("/feedback/:id/update",jwtMiddleware,testimonyController.updateFeedbackStatusController)
// get-approve-testimony
router.get("/all-approve-feedback",testimonyController.getAllApprovedFeedbackController)
// add recipes
router.post("/add-recipe",jwtMiddleware,recipeController.addRecipeController)
// edit recipes
router.put("/recipe/:id/edit",jwtMiddleware,recipeController.updateRecipeController)
// delete recipes
router.delete("/recipe/:id/remove",jwtMiddleware,recipeController.removeRecipeController)


module.exports = router