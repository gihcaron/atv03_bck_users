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

//   getPostById: async (req, res) => {
//     try {
//       const result = await postModel.query("SELECT * FROM posts WHERE id = $1", [req.params.id]); 
//       const post = result.rows[0];
//       if (!post) {
//         return res.status(404).json({ message: "Post não encontrado" });
//       }
//       res.status(200).json(post);
//     } catch (error) {
//       res.status(500).json({ message: "Erro ao buscar post", error: error.message });
//     }
//   },

const addPost = async (req, res) => {
  try {
    const { user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem } = req.body;
    const photo = req.file ? req.file.filename : null;
    if (!autor || !imagem) {
            throw new Error("Todos os campos são obrigatórios");
          }
          const result = await postModel.query(
            "INSERT INTO posts (autor, imagem) VALUES ($1, $2) RETURNING *",
            [autor, imagem]
          );
  } catch (error) {
    res.status(500).jso({message: "Erro ao adicionar post"})
  }
};
  // addPost: async (req, res) => {
  //   try {
  //     const { autor, imagem } = req.body;
  //     if (!autor || !imagem) {
  //       throw new Error("Todos os campos são obrigatórios");
  //     }
  //     const result = await postModel.query(
  //       "INSERT INTO posts (autor, imagem) VALUES ($1, $2) RETURNING *",
  //       [autor, imagem]
  //     );
  //     res.status(201).json({ message: "Post adicionado com sucesso!", post: result.rows[0] });
  //   } catch (error) {
  //     res.status(400).json({ message: "Erro ao adicionar post", error: error.message });
  //   }
  // },

//   updatePost: async (req, res) => {
//     try {
//       const { autor, imagem } = req.body;
//       const result = await postModel.query(
//         "UPDATE posts SET autor = $1, imagem = $2 WHERE id = $3 RETURNING *",
//         [autor, imagem, req.params.id]
//       );
//       const updatedPost = result.rows[0];
//       if (!updatedPost) {
//         return res.status(404).json({ message: "Post não encontrado" });
//       }
//       res.status(200).json({ message: "Post atualizado com sucesso!", post: updatedPost });
//     } catch (error) {
//       res.status(400).json({ message: "Erro ao atualizar post", error: error.message });
//     }
//   },

//   deletePost: async (req, res) => {
//     try {
//       const result = await postModel.query("DELETE FROM posts WHERE id = $1 RETURNING *", [req.params.id]); // Deleta o post
//       const deletedPost = result.rows[0];
//       if (!deletedPost) {
//         return res.status(404).json({ message: "Post não encontrado" });
//       }
//       res.status(200).json({ message: "Post deletado com sucesso!" });
//     } catch (error) {
//       res.status(400).json({ message: "Erro ao deletar post", error: error.message });
//     }
//   }
// };

module.exports = {getAllPosts, getPostById};