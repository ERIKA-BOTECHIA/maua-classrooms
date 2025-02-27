import express ,{Request,  Response} from 'express'
import dotenv from 'dotenv';


interface IBook  extends Document {
    id: {type: String, require : true},
    idBook : {type: String, require : true},
    endpoint: {type: String, require: true},
    ISBN:{type: String, require: true, unique: true}
}