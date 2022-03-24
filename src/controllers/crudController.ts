import {Request, Response} from 'express';

import Notes from '../models/notes';

export const addNoteForm = (req: Request, res: Response) => {
    res.render('pages/addnote');
}

export const addNote = async (req: Request, res: Response) => {
    let title = req.body.title;

    let newNote = await Notes.create({
        title: title,
        completed: false,
    });

    res.redirect('/');
}

export const editNote = (req: Request, res: Response) => {
    res.send('Editar nota');
}

export const delNote = (req: Request, res: Response) => {
    res.send('Remover nota');
}