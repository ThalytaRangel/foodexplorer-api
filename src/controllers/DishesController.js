const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const {name, description, price, category_id, ingredients} = request.body;

    const newDish = { name, description, price, category_id: Number(category_id)}
   
    const [dish_id] = await knex("dishes").insert(newDish);

    const ingredientsInsert = ingredients.map(ingredient => { 
      return {
        dish_id,
        name: ingredient,
      }
    });
    
    await knex("dish_ingredients").insert(ingredientsInsert);
    

    return response.status(201).json({message:"Prato cadastrado com sucesso!"});
  }

  async show(request, response) {
    const {id} = request.params;

    const dish = await knex("dishes").where({id}).first(); 
    const ingredients = await knex("dish_ingredients").where({dish_id: id}).orderBy("name");

    return response.json({
      ...dish, 
      ingredients
    });
  }

  async delete(request, response) {
    const {id} = request.params;

    await knex("dishes").where({id}).delete();

    return response.json({message: "Prato deletado"})
  }
}

module.exports = DishesController;