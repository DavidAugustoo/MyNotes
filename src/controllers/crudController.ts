import {Request, Response} from 'express';

export const addNote = (req: Request, res: Response) => {
    res.send('Adicionar nota');
}

export const editNote = (req: Request, res: Response) => {
    res.send('Editar nota');
}

export const delNote = (req: Request, res: Response) => {
    res.send('Remover nota');
}