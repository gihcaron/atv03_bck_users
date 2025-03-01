const User = require("../models/User.js");
const UserList = require("../models/UserList");
const lista = new UserList();

// Adicionando usuários iniciais
lista.addUser(new User("João Silva", "joao@example.com", 30));
lista.addUser(new User("Maria Souza", "maria@example.com", 25));

const router = {
  getAllUsers: (req, res) => {
    res.json(lista.getAllUsers());
  },

  getUserById: (req, res) => {
   try{
    const users = lista.getUserById(req.params.id);
    res.status(200).json(users);
   } catch (error){ 
    res.status(400).json({ message: "Erro ao buscar usuário", error });
   }
},

addUser: (req, res) => {
  try {
      const { name, email, age } = req.body;
      if (!name || !email || !age) {
          throw new Error("Todos os campos são obrigatórios");
      }
      const user = new User(name, email, age);
      lista.addUser(user);
      res.status(200).json({ message: "Usuário adicionado com sucesso!" }); 
  } catch (error) {
      res.status(400).json({ message: "Erro ao adicionar usuário", error: error.message });
  }
},

  updateUser: (req, res) => {
    try{
      res.status(200).json(lista.updateUser(req.params.id, req.body));
    } catch (error){
      res.status(400).json({ message: "Erro ao atualizar usuário", error});
    
    }
 
  },

  deleteUser: (req, res) => {
    try{
      lista.deleteUser(parseInt(req.params.id));
      res.status(200).json({ 
        message: "Usuário deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar usuário", error: error.message });
    }
  }
};

module.exports = router;