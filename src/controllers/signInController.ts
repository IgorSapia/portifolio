import { Request, Response} from 'express';

export const signIn = (req: Request, res: Response) =>{
    res.render('pages/signIn',{
        subtitle: "Cadastro"
    });
}