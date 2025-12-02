const Food = require("../models/Food");

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json(updatedFood);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};