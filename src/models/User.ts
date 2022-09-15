import {Schema, model, Document} from 'mongoose'

export interface IUser extends Document {
    username: string;
    fullname: string;
    age: number;
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export default model<IUser>('User', userSchema);