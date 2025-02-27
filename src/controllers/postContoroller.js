const Post = require("../models/Post.js");
const PostList = require("../models/PostList");
const lista = new PostList();

// Adicionando usuários iniciais
lista.addPost(new Post("João Silva", "joao@example.com", 30));
lista.addPost(new Post("Maria Souza", "maria@example.com", 25));

const router = {
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },

  getPostById: (req, res) => {
    const Post = lista.getPostById(parseInt(req.params.id));

    if (!Post){
        return res.status(404).json({erro: "Post não encontrado!"});

    } else {
        res.json(Post)
    }
},

  addPost: (req, res) => {
   const {name, email, age} = req.body;
   if (!name || !email || !age){
    return res.status(400).json({erro: "Preencha todos os campos para cadastro!"});
   };

   const newPost = lista.addPost;
    res.status(201).json(newPost);
  },

  updatePost: (req, res) => {
 
  },

  deletePost: (req, res) => {
    
  }
};

module.exports = router;