import mongoose from 'mongoose'
const { Schema, model, Types } = mongoose

const postSchema = new Schema({
    body: { type: String, required: true},
    created_at: { type: Number, required: true},
    author: { type: Types.ObjectId, required: true, ref: 'User' },
    likes: { type: Array, required: true }
})

export default model('Post', postSchema )