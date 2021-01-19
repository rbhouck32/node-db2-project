const db = require("../../data/db-config.js");

module.exports = {
  get,
  getById,
  add,
  remove,
  update,
};

function get() {
  return db()
    .from("cars")
    .select("id as cars_id", "VIN", "make", "model", "mileage");
}

function getById(id) {
  return db("cars").where("id", id).first();
}

function add(car) {
  return db("cars")
    .insert(car)
    .then(([id]) => {
      return getById(id);
    });
}
function update(id, carBody) {
  return db("cars")
    .update(carBody)
    .where("id", id)
    .then(() => {
      return getById(id);
    });
}

async function remove(id) {
  const carToDelete = await getById(id);
  await db("cars").delete().where("id", id);
  return Promise.resolve(carToDelete);
}
