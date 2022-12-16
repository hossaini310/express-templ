import { UserValidate } from '../validators/validators.js';
import path from 'path';
import fs from 'fs';

const dirname = path.resolve();
const movies = JSON.parse(fs.readFileSync(path.join(dirname, './models/movies.json')));

const getMovies = (req, res) => res.status(200).json(movies);

const getMovie = (req, res) => {
  const rID = req.params.id;
  const movie = movies.find(({ id }) => id == rID);
  if (movie) {
    res.status(200).json(movie);
  } else res.status(404).json('NOT FOUND');
};
export { getMovies, getMovie };
