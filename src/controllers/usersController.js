const User = require("../models/User");
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
    const user = lista.getUserById(parseInt(req.params.id));

    if (!user){
        return res.status(404).json({erro: "User não encontrado!"});

    } else {
        res.json(user)
    }
},

  addUser: (req, res) => {
   const {name, email, age} = req.body;
   if (!name || !email || !age){
    return res.status(400).json{erro: "Preencha todos os campos para cadastro!"}
   }

   const newUser = lista.addUser;
    res.status(201).json(newUser);
  },

  updateUser: (req, res) => {
 
  },

  deleteUser: (req, res) => {
    
  }
};

module.exports = router;