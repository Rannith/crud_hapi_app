import joi from 'joi'

export const userValidationSchema = (input: Object) => {
    const schema = joi.object({
        username: joi.string().optional(),
        fullname: joi.string().min(3).max(15).optional(),
        age: joi.number().min(18).max(70).optional()
    })

    return schema.validate(input)
}