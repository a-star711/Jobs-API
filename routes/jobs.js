const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs');

/**
 * @swagger
  * /api/v1/jobs:
 *   get:
 *     summary: Get all jobs
 *     security:
 *       - BearerAuth: []
 *     description: Retrieve a list of all available jobs (requires token).
 *     responses:
 *       200:
 *         description: A list of jobs was successfully retrieved.
 *       401:
 *         description: Unauthorized access - token missing or invalid.
 *   post:
 *     summary: Create a new job
 *     description: Add a job to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *                 example: "Google"
 *               position:
 *                 type: string
 *                 example: "Frontend Developer"
 *     responses:
 *       201:
 *         description: Job successfully created.
 *       400:
 *         description: Invalid input.
 */
router.route('/').get(getAllJobs).post(createJob);

/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   get:
 *     summary: Get a single job
 *     description: Retrieve a job by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job retrieved successfully.
 *       404:
 *         description: Job not found.
 *   patch:
 *     summary: Update a job
 *     description: Update the details of a specific job by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *                 example: "Microsoft"
 *               position:
 *                 type: string
 *                 example: "Backend Developer"
 *     responses:
 *       200:
 *         description: Job updated successfully.
 *       404:
 *         description: Job not found.
 *   delete:
 *     summary: Delete a job
 *     description: Remove a specific job by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job deleted successfully.
 *       404:
 *         description: Job not found.
 */
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
