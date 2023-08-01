const express = require("express");

const apiController = require("../controllers/apiController");
const router = express.Router();

router.route("/").get(apiController.getCities);
router.route("/doctors/all").get(apiController.getDoctors);

router.route("/doctors/create").post(apiController.createDoctor);

module.exports = router;
