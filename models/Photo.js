import mongoose from 'mongoose'
const { Schema, model, Types } = mongoose

const photoSchema = newSchema({
    url: { type: String, required: true },
    user_id: { type: Types.ObjectId, required: true, ref: 'User'},
    likes: { type: Array, required: true }
})
//objectId - уникальный айди пользователя, который создает монгоДб
//ref - относится к коллекции пользователя ('User')

export default model('Photo', photoSchema) 
