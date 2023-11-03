import {Request, Response} from "express";
import connection from "../database";

export async function getThemes(req: Request, res: Response){
    try{

        const themes = await connection.query(`
            SELECT * FROM themes
        `);
        return res.send(themes.rows);


    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}

export async function createTheme(req: Request, res: Response){
    try{

        const name = req.body.name;
        const option_1 = req.body.option_1;
        const option_2 = req.body.option_2;
        const description = req.body.description;

        const themes = await connection.query(`
            INSERT INTO themes(name, option_1, option_2, description)

            VALUES($1, $2, $3, $4)
        `, [name, option_1, option_2, description]);
        return res.send(themes.rows);


    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}