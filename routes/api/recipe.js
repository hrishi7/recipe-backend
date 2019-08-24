const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


//load user model
const Recipe = require('../../models/Recipe');

 //@route  GET api/recipe/test
  //@desc   testing
  //@access public
  router.get("/test", (req, res) => {
   res.json('ok');
  });

//@route  Post api/recipe/
  //@desc   save data to recipe model
  //@access public
  router.post("/", (req, res) => {
    let newRecipe = new Recipe({
      title:req.body.title,
      course: req.body.course,
      recipeImageUrl:req.body.recipeImageUrl,
      category:req.body.category,
      source:req.body.source,
      servingSize:req.body.servingSize,
      preperationTime:req.body.preperationTime,
      cookingTime:req.body.cookingTime,
      rating:req.body.rating,
      Ingredients:req.body.Ingredients,
      direction:req.body.direction,
      notes:req.body.notes,
      nutritionServingSize:req.body.nutritionServingSize,
      nutritionCalories:req.body.nutritionCalories,
      nutritionFat:req.body.nutritionFat,
      nutritionSaturatedFat:req.body.nutritionSaturatedFat,
      nutritionsCholesterol:req.body.nutritionsCholesterol,
      nutritionCarbs:req.body.nutritionCarbs,
      nutritionFibre:req.body.nutritionFibre,
      nutritionProtein:req.body.nutritionProtein,
      nutritionSuger:req.body.nutritionSuger,
      userEmail: req.body.userEmail
    })
    newRecipe.save()
    .then(()=>{
      res.json('succesfully saved');
    })
    .catch(err=> res.json(err));
   });

//@route  Post api/recipe/:id
  //@desc   update data to recipe model
  //@access public
  router.post("/:id", (req, res) => {
    let newRecipe ={
      title:req.body.title,
      course: req.body.course,
      recipeImageUrl:req.body.recipeImageUrl,
      category:req.body.category,
      source:req.body.source,
      servingSize:req.body.servingSize,
      preperationTime:req.body.preperationTime,
      cookingTime:req.body.cookingTime,
      rating:req.body.rating,
      Ingredients:req.body.Ingredients,
      direction:req.body.direction,
      notes:req.body.notes,
      nutritionServingSize:req.body.nutritionServingSize,
      nutritionCalories:req.body.nutritionCalories,
      nutritionFat:req.body.nutritionFat,
      nutritionSaturatedFat:req.body.nutritionSaturatedFat,
      nutritionsCholesterol:req.body.nutritionsCholesterol,
      nutritionCarbs:req.body.nutritionCarbs,
      nutritionFibre:req.body.nutritionFibre,
      nutritionProtein:req.body.nutritionProtein,
      nutritionSuger:req.body.nutritionSuger,
      userEmail: req.body.userEmail
    }
    Recipe.findOneAndUpdate({ _id: req.params.id}, {$set:newRecipe}, { new: true})
    .then(()=>{
      res.json('succesfully updated');
    })
    .catch(err=> res.json(err));
   });

   //@route  Get api/recipe/getAll
  //@desc   get all data from recipe model
  //@access public
  router.get("/getAll", (req, res) => {
    Recipe.find()
      .then(recipe=>{
        res.json(recipe);
      })
    .catch(err=> res.json(err));
   });


   //@route  Get api/recipe/getAll/:email
  //@desc   get data to using email
  //@access public
  router.get("/getAll/:email", (req, res) => {
    Recipe.find({userEmail:req. params.email})
      .then(recipe=>{
        res.json(recipe);
      })
    .catch(err=> res.json(err));
   });


   //@route  Get api/recipe/getSingle/:id
  //@desc   get data from recipe model
  //@access public
  router.get("/getSingle/:id", (req, res) => {
    Recipe.findOne({ _id: req.params.id})
    .then(recipe=>{
      res.json(recipe);
    })
    .catch(err=> res.json(err));
   });

 //@route  Get api/recipe/getBysearch/search
  //@desc   get databt searching
  //@access public
  router.get("/getBysearch/:search", (req, res) => {
    Recipe.find({ title: new RegExp(req.params.search,'i')})
    .then(recipe=>{
      res.json(recipe)
    })
    .catch(err=> res.json(err));
   });


   //@route  Delete api/recipe/:id
  //@desc   save data to recipe model
  //@access public
  router.delete("/:id", (req, res) => {
    Recipe.findOneAndDelete({_id: req.params.id})
    .then(()=>{
      res.json('recipe deleted!');
    })
    .catch(err=> res.json(err));
   });


//export file
module.exports = router;