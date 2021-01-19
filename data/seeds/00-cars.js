exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "1GKKVTKD0FJ135465",
          make: "Ford",
          model: " Focus RS",
          mileage: 20123,
          transmission: "Manual",
          titleStatus: "",
        },
        {
          VIN: "2FMDK4KC5DBB54343",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 500,
          transmission: "Auto",
          titleStatus: "N/A",
        },
        {
          VIN: "1C3CCCBB2FN509821",
          make: "Volkswagen",
          model: "GTI",
          mileage: 79342,
          transmission: "Manual",
          titleStatus: "Clean",
        },
        {
          VIN: "1GDGG31V831968069",
          make: "Honda",
          model: "Civic",
          mileage: 52345,
          transmission: "Auto",
          titleStatus: "Clean",
        },
        {
          VIN: "1GCRKSE3XBZ246441",
          make: "Volkswagen",
          model: "CC",
          mileage: 1234,
          transmission: "Manual",
          titleStatus: "",
        },
        {
          VIN: "19UUA8F23CA053488",
          make: "Audi",
          model: "R8",
          mileage: 76432,
          transmission: "Manual",
          titleStatus: "",
        },
        {
          VIN: "1NXBR32E63Z130186",
          make: "Honda",
          model: "Prelude",
          mileage: 43234,
          transmission: "Auto",
          titleStatus: "Clean",
        },
        {
          VIN: "WBANA73554B035630",
          make: "Acura",
          model: "Integra",
          mileage: 5235,
          transmission: "Auto",
          titleStatus: "SALVAGE",
        },
        {
          VIN: "JA4JZ4AX5FZ060576",
          make: "Tesla",
          model: "Cyber Truck",
          mileage: 0965,
          transmission: "Manual",
          titleStatus: "Clean",
        },
        {
          VIN: "KL8CD6S95DC546225",
          make: "Toyota",
          model: "Supra",
          mileage: 12341,
          transmission: "Auto",
          titleStatus: "SALVAGE",
        },
        {
          VIN: "1HTMMAAL67H341003",
          make: "Chevrolet",
          model: "GT 350",
          mileage: 11231,
          transmission: "Manual",
          titleStatus: "Clean",
        },
        {
          VIN: "1N4AL11D45C233197",
          make: "Ford",
          model: "Focus ST",
          mileage: 432423,
          transmission: "Manual",
          titleStatus: "N/A",
        },
      ]);
    });
};
