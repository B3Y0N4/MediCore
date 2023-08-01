const mongoose = require("mongoose");

const Doctors = mongoose.model("hospitals", new mongoose.Schema({}));

module.exports = Doctors;
