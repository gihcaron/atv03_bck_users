const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const upload = require("./../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey.js")

router.use(apiKeyMiddleware);

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

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               autor:
 *                 type: string
 *               likes:
 *                 type: integer
 *               comentarios:
 *                 type: integer
 *               salvamentos:
 *                 type: integer
 *               compartilhamentos:
 *                 type: integer
 *               imagem:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 */
router.post("/", upload.single("photo"), postController.addPost);

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
 *         description: ID do post a ser buscado
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */
router.get("/:id", postController.getPostById);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Atualiza um post
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               autor:
 *                 type: string
 *               likes:
 *                 type: integer
 *               comentarios:
 *                 type: integer
 *               salvamentos:
 *                 type: integer
 *               compartilhamentos:
 *                 type: integer
 *               imagem:
 *                 type: string  
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 */
router.put("/:id", postController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deleta um post
 *     tags: [posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser deletado
 *     responses:
 *       200:
 *         description: Post deletado
 *       404:
 *         description: Post não encontrado
 */
router.delete("/:id", postController.deletePost);

module.exports = router;
