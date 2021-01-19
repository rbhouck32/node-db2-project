const express = require("express");

const Cars = require("./cars-model.js");
const { validateCarId, validateCar } = require("../middleware/middleware.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const carData = await Account.get();
    res.status(200).json(carData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validateCarId, async (req, res, next) => {
  try {
    const carData = await Cars.getById(req.params.id);
    res.status(200).json(carData);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateCar, async (req, res, next) => {
  try {
    const newCar = await Cars.add(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateCarId, validateCar, async (req, res, next) => {
  try {
    const updatedCarData = await Cars.update(req.params.id, req.body);
    res.status(200).json(updatedCarData);
  } catch (error) {
    next(error);
  }
});

router.delete("/id", validateCarId, async (req, res, next) => {
  try {
    const deletedCar = await Cars.remove(req.params.id);
    res.status(200).json({
      message: `the car with the specified id of ${req.params.id} or ${deletedCar} has been deleted from the database `,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
