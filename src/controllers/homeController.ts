import {Request, Response} from 'express'

export const allNote = (req: Request, res: Response) => {
    res.render('pages/home');
}

export const completedNote = (req: Request, res: Response) => {
    res.send('home');
}