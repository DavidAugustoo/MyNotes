import {Request, Response} from 'express';

import Notes from '../models/notes';

export const allNote = async (req: Request, res: Response) => {

    let list = await Notes.find({
        completed: false
    });

    res.render('pages/home', {
        list,
    });
}

export const completedNote = async (req: Request, res: Response) => {
    let list = await Notes.find({
        completed: true
    });

    res.render('pages/completed', {
        list,
    });
}