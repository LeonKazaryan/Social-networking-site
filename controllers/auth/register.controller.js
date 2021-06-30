import User from '../../models/User.js'

export default async (req, res) => {
    try{
      const {phone = null, first_name = null, last_name = null, password = null, email = null} = req.body

      if (!phone || !first_name || !last_name || !password) {
          return res.status(400).json({ message: 'Required fields are missing'})
      } 

      if (password.length < 6){
        return res.status(400).json({ message: "Password should contain more than 6 symbols"})
      }

      if (phone.length !== 11){
        return res.status(400).json({ message: "Wrong type of phone"})

      }

      const candidate = await User.findOne({phone: phone})

      if (candidate){
        return res.status(400).json({ message: "User with this phone number is already registered"})
      }

      const user = new User({
        phone,
        password,
        first_name,
        last_name,
        email
      })

      const registeredUser = await user.save(user)
      //save сохраняет в базу данных

      res.json({ message: "Succes" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Server error' })
    }
}