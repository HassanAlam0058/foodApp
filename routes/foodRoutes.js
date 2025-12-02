const express = require("express");
const { getAllFoods, updateFood } = require("../controllers/foodController");
const router = express.Router();

router.get("/", getAllFoods);
router.put("/:id", updateFood); // add PUT route to update a food item

module.exports = router;