const mongoose = require('mongoose');

// convertir ti Id de Mongo
// const opts = { toJSON: { virtuals: true } };

const UserSchema = mongoose.Schema({
    created_at :{
        type: Date,
        default : Date.now(),
    },
    updated_at : {
        type: Date,
        required : false,
    },
    nombre :{
        type : String,
        required: true,
        trim: true,
    },
    apellido_paterno : {
        type: String,
        required : false,
        trim : true
    },
    email:{
        type : String,
        required : false,
        trim: true,
        unique : true,
    },
    tipo_servicio :{
        type : String,
        required : false
    },
    facebook_id:{
        type : String,
        required: false,
        trim : true,
        unique : true
    },
    profile_pic :{
        type : String,
        required : false
    }
});

module.exports = mongoose.model('User', UserSchema );