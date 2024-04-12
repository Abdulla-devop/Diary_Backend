import User from "../models/user.js";

//user login & signup fuction
export function getUserByEmail(req){
    return User.findOne({
        email:req.body.email,
    })
}

