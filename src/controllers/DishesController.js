const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { name, description, price, category_id, ingredients } = request.body;

    const newDish = { name, description, price, category_id: Number(category_id) };

    const [dish_id] = await knex("dishes").insert(newDish);

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        dish_id,
        name: ingredient,
      };
    });

    await knex("dish_ingredients").insert(ingredientsInsert);

    return response.status(201).json({ message: "Prato cadastrado com sucesso!" });
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("dish_ingredients").where({ dish_id: id }).orderBy("name");

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json({ message: "Prato deletado" });
  }

  async index(request, response) {
    const { name } = request.query;

    let dishes;

    if (name) {
      const dishesByName = await knex("dishes").whereLike("name", `%${name}%`).orderBy("name");

      if (dishesByName.length == 0) {
        const dishesByIngredients = await knex("dish_ingredients")
          .select("dishes.*")
          .whereLike("dish_ingredients.name", `%${name}%`)
          .innerJoin("dishes", "dishes.id", "dish_ingredients.dish_id")
          .orderBy("dishes.name")
          .groupBy("dishes.id");

        dishes = dishesByIngredients;
      } else {
        dishes = dishesByName;
      }
    } else {
      dishes = await knex("dishes").orderBy("name");
    }

    return response.json(dishes);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, category_id, ingredients } = request.body;

    const dish = await knex("dishes").where({ id }).first();

    if (!dish) {
      throw new AppError("Prato não encontrado!");
    }

    dish.name = name ?? dish.name;
    dish.description = description ?? dish.description;
    dish.category_id = category_id ?? dish.category_id;
    dish.price = price ?? dish.price;

    
    await knex("dishes").where({ id }).update({
      name: dish.name,
      price: dish.price,
      description: dish.description,
      category_id: dish.category_id,
    });
    
    await knex("dish_ingredients").where({ dish_id: id }).delete(); 

    const ingredientsList = ingredients.map((ingredient) => {
      return {
        dish_id: id,
        name: ingredient,
      };
    });    
    
    await knex("dish_ingredients").insert(ingredientsList);

    return response.json("Informações do prato atualizadas com sucesso!");
  }
}

module.exports = DishesController;
