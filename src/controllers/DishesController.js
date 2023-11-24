const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const {name, description, price, category_id, ingredients} = request.body;

    const newDish = { name, description, price, category_id: Number(category_id)}
   
    const [dish_id] = await knex("dishes").insert(newDish);

    const ingredientsList = ingredients.map(name => { 
      return {
        dish_id,
        name,
      }
    });
    
    await knex("dish_ingredients").insert(ingredientsList);
    

    return response.status(201).json({message:"Prato cadastrado com sucesso!"});
  }
}

module.exports = DishesController;