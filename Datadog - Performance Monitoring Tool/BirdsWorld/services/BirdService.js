const BirdModel = require("../models/Bird");

exports.getAllBirds = async () => {
  return await BirdModel.find();
};

exports.createBird = async (bird) => {
  return await BirdModel.create(bird);
};
exports.getBirdById = async (id) => {
  return await BirdModel.findById(id);
};

exports.updateBird = async (id, bird) => {
  return await BirdModel.findByIdAndUpdate(id, bird);
};

exports.deleteBird = async (id) => {
  return await BirdModel.findByIdAndDelete(id);
};
