import mongoose from 'mongoose'
const { Schema, model, Types } = mongoose

const commentSchema = new Schema({
    body: { type: String, required: true},
    created_at: { type: Number, required: true},
    author: { type: Types.ObjectId, required: true, ref: 'User' },
})

export default model('Comment', commentSchema )