const userModel = require("../models/userModel");


  const getAllUsers = async (req, res) => {
    try {
      const Users = await userModel.getAllUsers();
      res.json( Users);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuários"});    }
  };

 const getUserById = async (req, res) => {
    try {
      const user = await userModel.getUserById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuário", error: error.message });
    }
  };

  const addUser = async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = await userModel.addUser(name, email, age);
      if (!name || !email || !age) {
        throw new Error("Todos os campos são obrigatórios");
      }
      res.status(201).json({ message: "Usuário adicionado com sucesso!", newUser });
    } catch (error) {
      console.error("Erro:", error.message);
      res.status(500).json({ message: "Erro ao adicionar usuário"});
    }
  };

  const updateUser = async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const updateUser = await userModel.updateUser(req.params.id, name, email, age);
      if (!updateUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
     
    res.json(updateUser);

    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar usuário", error: error.message });
    }
  };

 const deleteUser = async (req, res) => {
    try {
      const message = await userModel.deleteUser(req.params.id);
      res.json(message);

      if (!deletedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar usuário", error: error.message });
    }
  }


  module.exports = {getAllUsers, getUserById, addUser, updateUser, deleteUser};
