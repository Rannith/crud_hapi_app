import { Server } from "@hapi/hapi";
import Joi from "joi";
// import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller";
import UserController from "../controller";

const userController = new UserController()

export const routes = (server: Server) => {

    server.route({
        method: 'POST',
        path: '/users',
        handler: userController.createUser
    })

    server.route({
        method: 'GET',
        path: '/users',
        handler: userController.getUsers
    })

    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: userController.getUser,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().length(24)
                })
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: userController.updateUser,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().length(24)
                })
            }
        }
    })

    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: userController.deleteUser,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().length(24)
                })
            }
        }
    })
}