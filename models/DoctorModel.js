const mongoose = require("mongoose");

const Doctors = mongoose.model(
  "Doctors",
  new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Specializations: mongoose.Schema.Mixed,
    Guide: String,
    About: String,
    Contact: mongoose.Schema.Types.Mixed,
    // Contact: {
    //   tel: String,
    //   adress: String,
    // },
    Insurens: mongoose.Schema.Types.Array,
    Profile_image_data: String,
    Diseases: mongoose.Schema.Types.Array,
  })
);

module.exports = Doctors;
