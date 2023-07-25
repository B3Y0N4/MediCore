const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.Doctors = require("./DoctorModel");

module.exports = db;
