const Cars = require("../cars/cars-model.js");

async function validateCarId(req, res, next) {
  try {
    const car = await Cars.getById(req.params.id);
    if (car) {
      req.car = car;
      next();
    } else {
      res
        .status(404)
        .json({ message: `Car with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Bad Request" });
  }
}

function validateCar(req, res, next) {
  const body = req.body;
  const vin = req.body.vin;
  const make = req.body.make;
  const model = req.body.model;
  const mileage = req.body.mileage;

  if (Object.keys(body).length !== 0) {
    if (vin || make || model || mileage) {
      next();
    } else {
      res.status(400).json({
        message: `missing one or multiple required fields, please check to make sure you have VIN, Make, Model, and Mileage filled in`,
      });
    }
  } else {
    res.status(400).json({ message: "missing user data" });
  }
}

module.exports = {
  validateCar,
  validateCarId,
};
