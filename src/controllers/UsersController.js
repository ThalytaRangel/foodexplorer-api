const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const { hash, compare } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password, admin } = request.body;

    const checkUserExists = await knex("users").where({ email }).first();

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso");
    }

    if(password.length < 6) {
      throw new AppError("A senha precisa conter pelo menos 6 caracteres");
    }

    const hashedPassword = await hash(password, 8);

    const user = await knex("users").insert({
      name,
      email,
      password: hashedPassword,
      admin,
    });

    if (!name) {
      throw new AppError("Nome é obrigatório");
    }

    return response.status(201).json({ message: "Usuário cadastrado com sucesso" });
  }

  async update(request, response) {
    const { name, email, password, old_password, admin } = request.body;

    const user_id = request.user.id;

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userEmailUpdated = await knex("users").where({ email }).first();

    if (userEmailUpdated && userEmailUpdated.id !== user.id) {
      throw new AppError("Este e-mail já está em uso");
    }

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga");
    }

    if (password && old_password) {
      const checkedOldPassword = await compare(old_password, user.password);

      if (!checkedOldPassword) {
        throw new AppError("A senha antiga não confere");
      }

      user.password = await hash(password, 8);
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.admin = admin ?? user.admin;

    await knex("users")
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
        admin: user.admin,
        updated_at: knex.fn.now(),
      })
      .where({ id: user_id });

    return response.status(201).json({ message: "Usuário atualizado com sucesso" });
  }
}

module.exports = UsersController;
