import express from 'express';
// Here you import your functions from controllers
import { getMovies, getMovie } from '../controllers/movies.js';

const router = express.Router();

// Here come your routes
router.get('/', getMovies);
router.get('/:id', getMovie);

export default router;
