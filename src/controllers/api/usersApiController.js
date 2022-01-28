const db = require('../../database/models');

const usersApiController = {
    'list': (req, res) => {
        db.User.findAll({include:['rol']})
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users.map(user=>{
                        return {
                            id: user.id,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            avatar: 'http://localhost:3001/images/users/'+user.avatar,
                            rol: user.rol,
                            url: 'http://localhost:3001/api/users/'+user.id
                        }
                    }) 
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id, {
            include: ['rol']
        })
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.rol.name
                    }
                }
                res.json(respuesta);
            });
    }
}

module.exports = usersApiController;