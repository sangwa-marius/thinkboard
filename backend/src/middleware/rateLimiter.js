const ratelimit = require('../config/upstash');

const rateLimiter = async(req,res,next)=>{
    try {
        const {success}= await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({
                message:"Too many requests, Please try  again later"
            })
        }

        next()
    } catch (error) {
        console.log("Rate limit errror",error);
        next(error)
    }
}

module.exports = rateLimiter;