import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import User, { IUser } from "../models/User";

export const createUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = new User(req.payload)
        const userSaved = await user.save()

        return res.response({ message: "Saved successfully", userSaved }).code(201)
    } catch (error) {
        return res.response({ error: error }).code(500)
    }
};

export const getUsers = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const users = await User.find()

        return res.response({ users }).code(200)
    } catch (error) {
        return res.response({ error: error }).code(404)
    }
};

export const getUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = await User.findById(req.params.id)

        if (!user)
            return res.response().code(404)

        return res.response({ user }).code(200)
    } catch (error) {
        return res.response({ error: error }).code(500)
    }
};

export const updateUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id ,req.payload as Document ,{ new: true })

        if (!user)
            return res.response().code(404)

        return res.response({ user, message: "Updated Successfully" }).code(200)
    } catch (error) {
        return res.response({ error: error }).code(500)
    }
};

export const deleteUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user)
            return res.response().code(404)

        return res.response({ user, message: "Deleted Successfully" }).code(200)
    } catch (error) {
        return res.response({ error: error }).code(500)
    }
};