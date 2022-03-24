import {Request, Response} from 'express';

import Notes from '../models/notes';
import { completedNote } from './homeController';

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

export const editNoteForm = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let list = await Notes.find({_id: id});

    res.render('pages/editnote', {
        list,
    });
}

export const editNote = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let newtitle: string = req.body.title;

    let note = await Notes.updateOne(
        {_id: id},
        {title: newtitle}
    );

    res.redirect('/');
}

export const completeNote = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let note = await Notes.updateMany(
        {_id: id},
        {completed: true}
    );

    res.redirect('/');
}

export const delNote = async (req: Request, res: Response) => {

    let id: string = req.params.id;

    let note = await Notes.findOneAndDelete({
        _id: id
    });

    res.redirect('/completed');
}