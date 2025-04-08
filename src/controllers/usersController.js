const pool = require("../config/database");
const userModel = require("../models/userModel");

const router = {
  getAllUsers: async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuários", error: error.message });    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
      const result = result.rows[0];
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuário", error: error.message });
    }
  },

  addUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      if (!name || !email || !age) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
      }
      const user = await pool.query(
        "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
        [name, email, age]
      );
      res.status(201).json({ message: "Usuário adicionado com sucesso!", user });
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar usuário", error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const user = await pool.query(
        "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
        [name, email, age, req.params.id]
      );
      const updatedUser = result.rows[0];
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json({ message: "Usuário atualizado com sucesso!", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar usuário", error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [req.params.id]);
      const deletedUser = result.rows[0];
      if (!deletedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar usuário", error: error.message });
    }
  }
};

module.exports = router;