import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    first_name: {type: String, required: true },
    last_name: {type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, required: false },
    friends: { type: Array, required: true },
    photos: { type: Array, required: true },
    posts: { type: Array, required: true },
})

export default model('User', userSchema)