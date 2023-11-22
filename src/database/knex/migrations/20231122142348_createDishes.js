exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("description");
    table.float("price").notNullable();
    table.text("image").default(null);
    
    table.integer("category_id").references("id").inTable("dish_categories").onDelete("CASCADE");
    
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("dishes");
