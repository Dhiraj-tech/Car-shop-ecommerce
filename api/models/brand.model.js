import { model, Schema } from "mongoose"

export const Brand = model('Brand', new Schema({
    name:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        unique: true,
        required: true,
    },
    status:{
        type: Boolean,
        default: true,
        required: true,
    },
}, {
    autoCreate: true,
    autoIndex: true,
    timestamps: true    
}))
