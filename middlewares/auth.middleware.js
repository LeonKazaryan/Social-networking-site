import jwt from "jsonwebtoken"

export default (req, res, next) => {

    try{
        const token = req.headers.authorization.split('')[1]

        if (!token){
            return res.status(401).json({message: "No authorization" })
        }

        const decoded = jwt.verify(token, "my-social-network")
        req.user = decoded
        next()
        
    } catch (e) {
        console.log(e)
        res.status(401).json({message: "No authorization" })
    } 
}