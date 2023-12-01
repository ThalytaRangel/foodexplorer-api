const AppError = require("../utils/AppError");
const knex = require("../database/knex");

async function ensureAdmin(request, response, next) {
  const id = request.user.id;

  const user = await knex("users").where({id}).first();

  if(user.admin) {
    return next()
  } else {
    throw new AppError("Usuário não é administrador", 401);
  }
}

module.exports = ensureAdmin;