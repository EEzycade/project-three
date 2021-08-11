const { Schema, model} = require('mongoose')

const regimentModel = new Schema(
    {
        day: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        activity: {
            type: String,
            required: true,
            trim: true
        },
        hours: {
            type: String,
            required: true,
            trim: true
        }

    }
)