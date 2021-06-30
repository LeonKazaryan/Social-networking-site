import User from '../../models/User.js'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
   try{
    const { phone = null, password = null } = req.body

    if (!phone || !password){
        return res.status(400).json({ message: 'Required fields are missing'})
    }

    if (password.length < 6){
        return res.status(400).json({ message: "Password should contain more than 6 symbols"})
    }

    if (phone.length !== 11){
        return res.status(400).json({ message: "Wrong type of phone"})
    }
    
//проверяем есть ли юзер с этим телефоном в базе
    const user = await User.findOne({phone: phone})

    if (!user) {
        return res.status(400).json({ message: "This phone is not registered yet"})
    }

//проверяем совпадает ли пароль
    if (password !== user.password){
        return res.status(400).json({ message: "Wrong password"})
    }


    const token = jwt.sign({ user_id: user._id }, 'my-social-network', {
        expiresIn: '72h',
    })

    res.json({user: {
        token,
        user_id: user._id,
        posts: user.posts,
        photos: user.photos,
        friend: user.friends,
     }
    })

   } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Server error' })
    }
}