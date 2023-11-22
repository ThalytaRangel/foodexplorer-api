exports.up = (knex) =>
  knex.schema.createTable("dish_categories", (table) => {
    table.increments("id");
    table.text("name").notNullable();
  });

exports.down = (knex) => knex.schema.dropTable("dish_categories");
