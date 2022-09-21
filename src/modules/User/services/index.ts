import User from "../model/index"
import UserRepository from "../repositories"
import { userValidationSchema } from "../../../validation/userValidationSchema"

const userRepository = new UserRepository()

class UserService {
    public createUserService = async (userPayload: any): Promise<Object> => {
        const validation = userValidationSchema(userPayload)

        if (validation.error?.isJoi) {
            const errors: any = []
            validation.error.details.forEach((detail) => {
                console.log(detail.path.toString())
                let error: any = {
                    [detail.path.toString()] : detail.message
                }
                errors.push(error)
            })

            return errors
        }

        const user = new User(userPayload)

        const userSaved = await userRepository.createUserRepository(user)

        return userSaved
    }

    public getUsersService = async (): Promise<Object> => {
        const users = await userRepository.getUsersRepository(User)

        return users
    }

    public getUserService = async (userId: any): Promise<Object> => {
        const user = await userRepository.getUserRepository(User, userId)

        return user
    }

    public updateUserService = async (userPayload: any, userId: any): Promise<Object> => {
        const validation = userValidationSchema(userPayload)

        if (validation.error?.isJoi) {
            const errors: any = []
            validation.error.details.forEach((detail) => {
                console.log(detail.path.toString())
                let error: any = {
                    [detail.path.toString()] : detail.message
                }
                errors.push(error)
            })

            return errors
        }
        const updateUser = await userRepository.updateUserRepository(User, userPayload, userId)

        return updateUser
    }

    public deleteUserService = async (userId: any): Promise<Object> => {
        const deleteUser = await userRepository.deleteUserRepository(User, userId)

        return deleteUser
    }
}

export default UserService