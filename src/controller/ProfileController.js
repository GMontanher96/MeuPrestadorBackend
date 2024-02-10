const Profile = require("../models/Profile");

module.exports = {
  async createProfile(req, res) {
    // metodo que cria perfil
    try {
      const { name } = req.body;

      const profile = await Profile.create({
        name,
      });
      res.status(200).json({ profile });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getProfile(req, res) {
    try {
      const profiles = await Profile.findAll();
      res.status(200).json({ profiles });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
