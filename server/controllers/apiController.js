const doctors = {
  data: [
    {
      Ad: "baran",
      Soyad: "kibar",
    },
    {
      Ad: "ok",
      Soyad: "ok",
    },
  ],
};

const getCities = (req, res) => {
  res.json(doctors);
};

module.exports = { getCities };
