import express from 'express';

import { obtenerTodosLosSuperHeroesController, insertarSuperHeroesController, editarSuperHeroesController, borrarSuperHeroePorIdController} from '../controllers/superheroesController.mjs';

const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperHeroesController);
// POST, PUT y DELETE
router.post('/heroes', insertarSuperHeroesController);
router.put('/heroes/edit/:id', editarSuperHeroesController);
router.delete('/heroes/delete/:id', borrarSuperHeroePorIdController);

export default router;