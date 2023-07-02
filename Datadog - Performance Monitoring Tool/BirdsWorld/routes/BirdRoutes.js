const express = require("express");
const {
  getAllBirds,
  createBird,
  getBirdById,
  updateBird,
  deleteBird,
} = require("../controllers/BirdController");

const router = express.Router();

router.route("/").get(getAllBirds).post(createBird);
router.route("/:id").get(getBirdById).put(updateBird).delete(deleteBird);

module.exports = router;