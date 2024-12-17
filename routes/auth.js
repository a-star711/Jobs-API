const express = require('express')
const router = express.Router()

const { login, register } = require('../controllers/auth')

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "securePassword123"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */

router.post('/register', register)

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user with email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "securePassword123"
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 */
router.post('/login', login)

module.exports = router
