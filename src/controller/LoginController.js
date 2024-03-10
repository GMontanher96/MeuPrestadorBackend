const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async Login(req, res) {
    // Criar token de acessos
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ where: { login } }); // validação do login

      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const token = jwt.sign(
        { userId: user.id },
        "58dsd45sf45wf4w5fw5fw5dee5rtttttt",
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Server Error " });
    }
  },
  async verifyToken(req, res, next) {
    // valida token
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    try {
      const decoded = jwt.verify(
        token.split(" ")[1],
        "dfefwe7f8ew7r874578g78g78g7"
      );
      req.user = decoded;
      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ message: "Invalid Token" });
    }
  },

};
