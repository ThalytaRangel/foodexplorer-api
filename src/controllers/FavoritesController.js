const AppError = require("../utils/AppError");
const knex = require("../database/knex");



class FavoritesController {
  async create(request, response) {

    const user_id = request.user.id;
    const {id : dish_id} = request.params;

    const favoritesExists = await knex("favorites_dishes").where({dish_id, user_id}).first();

    if(favoritesExists) {
      throw new AppError("O prato já está nos seus favoritos");
    }

    const dish = await knex("dishes").select("name").where({id:dish_id}).first();

    if(!dish) {
      throw new AppError("Prato não encontrado");
    }

    await knex("favorites_dishes").insert({dish_id, user_id});

    return response.json("O prato foi adicionado aos seus favoritos");
  }

  async index(request, response) {
    const user_id = request.user.id;

    const favorites = await knex("favorites_dishes").select("favorites_dishes.dish_id","dishes.name", "dishes.image").where("favorites_dishes.user_id", user_id).innerJoin("dishes","dishes.id", "favorites_dishes.dish_id").orderBy("favorites_dishes.id");

    return response.json(favorites);
  }

  async delete(request, response) {
    const {id} = request.params;

    await knex("favorites_dishes").where({dish_id: id, user_id: request.user.id }).delete();

    return response.json("O prato foi retirado dos seus favoritos");
  }
}

module.exports = FavoritesController;