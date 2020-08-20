import connection from '../database/connection';
import {Request, Response} from 'express';

interface Users {
    id: string,
    lat: number,
    long: number,
    date: string,
    hour: string
}

const UsersController = {
    
    async index(request: Request, response: Response): Promise<Response> {
        const users: Users[] = await connection('users').select('*');

        return response.json(users.reverse());
    },

    async create(request: Request, response: Response): Promise<Response> {
        const { id, lat, long, date, hour }: Users = request.body;

        await connection('users').insert({
            id,
            lat,
            long,
            date,
            hour
        })

        return response.json('enviado')
    }
}

export default UsersController;