const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de Posts
 */


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lista todos os itens
 *     tags: [posts]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", postController.getAllPosts);
// router.post("/", postController.addPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Busca item por ID
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */

router.get("/:id", postController.getPostById);
// router.put("/:id", postController.updatePost);
// router.delete("/:id", postController.deletePost);

module.exports = router;
