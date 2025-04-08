const pool = require("../config/database");

const router = {
  getAllPosts: async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM posts"); 
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts", error: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM posts WHERE id = $1", [req.params.id]); 
      const post = result.rows[0];
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar post", error: error.message });
    }
  },

  addPost: async (req, res) => {
    try {
      const { autor, imagem } = req.body;
      if (!autor || !imagem) {
        throw new Error("Todos os campos são obrigatórios");
      }
      const result = await pool.query(
        "INSERT INTO posts (autor, imagem) VALUES ($1, $2) RETURNING *",
        [autor, imagem]
      );
      res.status(201).json({ message: "Post adicionado com sucesso!", post: result.rows[0] });
    } catch (error) {
      res.status(400).json({ message: "Erro ao adicionar post", error: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { autor, imagem } = req.body;
      const result = await pool.query(
        "UPDATE posts SET autor = $1, imagem = $2 WHERE id = $3 RETURNING *",
        [autor, imagem, req.params.id]
      );
      const updatedPost = result.rows[0];
      if (!updatedPost) {
        return res.status(404).json({ message: "Post não encontrado" });
      }
      res.status(200).json({ message: "Post atualizado com sucesso!", post: updatedPost });
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar post", error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [req.params.id]); // Deleta o post
      const deletedPost = result.rows[0];
      if (!deletedPost) {
        return res.status(404).json({ message: "Post não encontrado" });
      }
      res.status(200).json({ message: "Post deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar post", error: error.message });
    }
  }
};

module.exports = router;