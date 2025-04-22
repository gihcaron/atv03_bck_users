const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try{
      const posts = await postModel.getAllPosts(); 
      res.json(posts); 
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts" });
    }
};

const getPostById = async (req, res) => {
  try{
  const post = await postModel.getPostById(req.params.id);
  if (!post){
   return res.status(404).json({message: "Post não encontrado"});
  }
  res.status(200).json(post);
  } catch (error) {
   res.status(500).json({message: "Erro ao buscar post"})
  }
 };


const addPost = async (req, res) => {
  try {
    const { user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem } = req.body;
    const photo = req.file ? req.file.filename : null;
    const newPost = await postModel.addPost(user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo); 
    if (!autor || !imagem) {
            throw new Error("Todos os campos são obrigatórios");
    }
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Erro:", error.message);
    res.status(500).json({message: "Erro ao adicionar post"})
  }
};


const updatePost = async (req, res) => {
  try {
    const {  user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem} = req.body;
    const updatePost = await postModel.updatePost(
      req.params.id,
      user_id,
      autor,
      likes,
      comentarios,
      salvamentos,
      compartilhamentos,
      imagem
    );

    if (!updatePost) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.status(200).json({ message: "Post atualizado com sucesso!", post: updatePost });
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar post", error: error.message });
  }
};


  const deletePost = async (req, res) => {
    try {
      const message = await postModel.deletePost(req.params.id);
      res.json(message);
      res.status(200).json({ message: "Post deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar Post." });
  }
};

module.exports = {getAllPosts, getPostById, addPost, updatePost, deletePost};