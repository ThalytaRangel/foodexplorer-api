const AppError = require("../utils/AppError");
const knex = require("knex");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("Nome é obrigatório");
    }

    await response.json({ name, email, password });
  }
}

module.exports = UsersController;
