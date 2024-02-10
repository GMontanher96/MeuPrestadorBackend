const User = require("../models/User");
const Profile = require("../models/Profile");


module.exports = {


  async createUser(req, res) {
    // metodo que cria usuários
    try {
      const { name, login, password, confirmpassword, status, profile_id } = req.body;

      const user = await User.findOne({ where: { login } }); // validação do login

      if (user) {
        res.status(401).json({ message: "Usuário já cadastrado!" });
      } else {
        const user = await User.create({
          name,
          login,
          password,
          confirmpassword,
          status,
          profile_id
        });
        res.status(200).json({ user });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateUser(req, res) {
    // metodo que altera os dados do usuários
    try {
      const { id } = req.params;
      const { name, login, password, confirmpassword, status, profile_id } = req.body;

      const user = await User.findOne({ where: { id } }); // validação do id

      if (!user) {
        res.status(401).json({ message: "Nenhum usuário encontrado." });
      } else {
        const user = await User.update(
          { name, login, password, confirmpassword, status, profile_id },
          { where: { id } }
        );

        res.status(200).json({ user });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getUser(req, res) {
    try {
      const users = await User.findAll();

      if(!users) {
        res.status(401).json({ message: 'Não existe usuário cadastrados' });
      }
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async deleteUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id } }); // validação do id

        if(!user) {
            res.status(401).json({ message: 'Usuário não encontrado' });
          } else {
            await User.destroy({ where: { id} })
            res.status(200).json({ ok: true, message: 'Usuário deletado' });
          }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
