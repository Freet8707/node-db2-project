
exports.up = async function(knex) {
  await knex.schema.createTable('cars-specs', (table) => {
      table.increments("carID");
      table.integer("VIN").unique().notNull();
      table.text("make", 128).notNull();
      table.text("model", 128).notNull();
      table.integer("mileage").notNull();
      table.text("transmissionType", 40);
      table.text("titleStatus", 40);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars-specs");
};
