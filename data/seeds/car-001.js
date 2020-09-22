
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars-specs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars-specs').insert([
        {VIN: 12345690, make: "Toyota", model: "Corolla", mileage: 70000}
      ]);
    });
};
