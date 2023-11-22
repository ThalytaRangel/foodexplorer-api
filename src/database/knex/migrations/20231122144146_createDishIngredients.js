exports.up = knex => knex.schema.createTable("dish_ingredients", table => {
  table.increments("id");
  table.text("name").notNullable(); 
  table.integer("dish_id").notNullable().references("id").inTable("dishes").onDelete("CASCADE"); 
  
});

exports.down = knex => knex.schema.dropTable("dish_ingredients");
