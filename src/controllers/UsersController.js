const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { id, lat, long, date, hour } = request.body;

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