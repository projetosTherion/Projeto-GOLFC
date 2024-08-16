import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dtNasc: {
            type: String,
            required: true
        },
        docId: {
            type: String,
            required: true
        },
        cel: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User',userSchema);