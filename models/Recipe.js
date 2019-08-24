const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for bonus
const BonusSchema = new Schema({
  title: {
    type: String
  },
  course: {
    type: String
  },
  recipeImageUrl: {
    type: String
  },
  category: {
    type: String
  },
  source: {
    type: String
  },
  servingSize: {
    type: Number
  },
  preperationTime: {
    type: Number
  },
  cookingTime: {
    type: Number
  },
  rating: {
    type: Number
  },
  Ingredients: {
    type: [String]
  },
  direction: {
    type: [String]
  },
  notes: {
    type: [String]
  },
  nutritionServingSize: {
    type: Number
  },
  nutritionCalories: {
    type: Number
  },
  nutritionFat: {
    type: Number
  },
  nutritionSaturatedFat: {
    type: Number
  },
  nutritionsCholesterol: {
    type: Number
  },
  nutritionCarbs: {
    type: Number
  },
  nutritionFibre: {
    type: Number
  },
  nutritionProtein: {
    type: Number
  },
  nutritionSuger: {
    type: Number
  },
  userEmail:{
      type:String
  },
  date:{
      type: String,
      default: Date.now
  }
});
module.exports = Bonus = mongoose.model("recipe", BonusSchema);
