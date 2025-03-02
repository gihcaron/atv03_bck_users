const express = require("express");
const Post = require("../models/Post.js");
const PostList = require("../models/PostList.js");
const lista = new PostList();


lista.addPost(new Post('João Silva', 10, 5, 1, 2, 'imagem1'));
lista.addPost(new Post('Maria Souza', 20, 10, 2, 4, 'imagem2'));
lista.addPost(new Post('José Bezerra', 30.000, 15, 3, 6, 'imagem3'));

const router = {
 
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },


  getPostById: (req, res) => {
   try{
    const posts = lista.getPostById(req.params.id);
    res.status(200).json(posts);
   } catch (error){ 
    res.status(400).json({ message: "Erro ao buscar post", error });
   }
},

  addPost: (req, res) => {
   try{
    const {autor,imagens} = req.body;
    if (!autor || !imagens) {
      throw new Error("Todos os campos são obrigatórios");
    }
    const post = new Post(autor, 0, 0, 0, 0, imagens);
    lista.addPost(post);
    res.status(200).json({ message: "Post adicionado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao adicionar post", error: error.message });
    }
   },

  updatePost: (req, res) => {
    try{
      res.status(200).json(lista.updatePost(req.params.id, req.body));
    }
    catch (error){
      res.status(400).json({ message: "Erro ao atualizar post", error});
    }
  },

  deletePost: (req, res) => {
    try{
      lista.deletePost(parseInt(req.params.id));
      res.status(200).json({ 
        message: "Post deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar post", error: error.message });
    }
    
  }
};

module.exports = router;