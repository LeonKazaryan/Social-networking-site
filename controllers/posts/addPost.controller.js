import Post from '../../models/Post.js'
import POst from '../../models/Post.js'

export default (req, res) =>  {
    try {
        const user_id = req.user.user_id
        const { post = null } = req.body
        if (!post) {
            return res.status(400).json({ message: "Cannot add an empty post" })
        }

        const newPost = new Post({
            body: post,
            created_at: Date.now(),
            author: user_id,
            likes: [],
            comments: []
        })

        const addedPost = await newPost.save()
        
    } catch (e) {
        console.log(e)
    }
}