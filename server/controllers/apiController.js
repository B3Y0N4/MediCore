const db = require("../models/index");

const getCities = (req, res) => {};

const getDoctors = async (req, res) => {
  const { limit, first_name, last_name } = req.query;
  const query = {};

  if (first_name || last_name) {
    query.$or = [];
    if (first_name) {
      query.$or.push({ FirstName: { $regex: first_name, $options: "i" } });
    }
    if (last_name) {
      query.$or.push({ LastName: { $regex: last_name, $options: "i" } });
    }
  }

  try {
    const doctors = await db.Doctors.find(query).limit(limit);

    res.json(doctors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};

const createDoctor = async (req, res) => {
  const doc = await db.Doctors.create(req.body);

  res.status(200).json({ id: doc._id });
};

module.exports = { getCities, getDoctors, createDoctor };
