class UserRepository {
    public createUserRepository = async (user: { save: () => any }): Promise<String> => {
        const dbResult = await user.save()

        return "User saved Successfully"
    }

    public getUsersRepository = async (User: { find: () => any }): Promise<Object> => {
        const dbResult = await User.find()

        return dbResult
    }

    public getUserRepository = async (User: { findById: (arg0: any) => any }, userId: any): Promise<Object> => {
        const dbResult = await User.findById(userId)

        return dbResult
    }

    public updateUserRepository = async (User: { findByIdAndUpdate: (arg0: any, arg1: any) => any }, userPayload: any, userId: any): Promise<Object> => {
        const dbResult = await User.findByIdAndUpdate(userId, userPayload)

        return dbResult
    }

    public deleteUserRepository = async (User: { findByIdAndDelete: (arg0: any) => any }, userId: any) => {
        const dbResult = await User.findByIdAndDelete(userId)

        return dbResult
    }
}

export default UserRepository