import { Router } from 'express';

const router = Router();

router.get('/', homeController.allNote);

router.get('/completed', homeController.completedNote);

router.get('/addNote', crudController.addNote);

router.get('/editNote', crudController.editNote);

router.get('/delNote', crudController.delNote);

export default router;