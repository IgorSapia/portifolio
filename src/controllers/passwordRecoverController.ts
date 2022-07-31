import { Request, Response} from 'express';

export const passwordRecover = (req: Request, res: Response) =>{
    res.render('pages/passwordRecover',{
        subtitle: "Esqueci minha senha"
    });
}