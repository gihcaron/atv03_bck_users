const postModel = require("../models/postModel")


const router = {
 
  getAllPosts: (req, res) => {
    res.json(postModel.getAllPosts());
  },


  getPostById: (req, res) => {
   try{
    const posts = postModel.getPostById(req.params.id);
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
    postModel.addPost(post);
    res.status(200).json({ message: "Post adicionado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao adicionar post", error: error.message });
    }
   },

  updatePost: (req, res) => {
    try{
      res.status(200).json(postModel.updatePost(req.params.id, req.body));
    }
    catch (error){
      res.status(400).json({ message: "Erro ao atualizar post", error});
    }
  },

  deletePost: (req, res) => {
    try{
      postModel.deletePost(parseInt(req.params.id));
      res.status(200).json({ 
        message: "Post deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar post", error: error.message });
    }
    
  }
};

module.exports = router;