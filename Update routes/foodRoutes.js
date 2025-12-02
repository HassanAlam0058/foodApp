const express = require("express");
const { getAllFoods } = require("../controllers/foodController");
const router = express.Router();

// GET all foods or search by name
router.get("/", getAllFoods);

module.exports = router;