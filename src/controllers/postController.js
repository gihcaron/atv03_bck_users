const Post = require("../models/Post.js");
const PostList = require("../models/PostList.js");
const lista = new PostList();

// Adicionando usuários iniciais
lista.addPost(new Post('João Silva', 10, 5, 1, 2, 'imagem1'));
lista.addPost(new Post('Maria Souza', 20, 10, 2, 4, 'imagem2'));
lista.addPost(new Post('José Bezerra', 30.000, 15, 3, 6, 'imagem3'));

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
   const {} = req.body;
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