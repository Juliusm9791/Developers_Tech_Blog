const router = require('express').Router();
const { User, Post, Comment, PostComment } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all posts
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User }, { model: Post }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [{ model: User }],
//         });

//         if (!postData) {
//             res.status(404).json({ message: 'No post found with this id!' });
//             return;
//         }

//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Create new post
// router.post('/', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.create({
//             title: req.body.title,
//             text: req.body.text,
//             userId: req.session.userId,
//         });

//         req.session.save(() => {
//             req.session.loggedIn = true;

//             res.status(200).json(postData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Update a post by its `id` value
// router.put('/:id', async (req, res) => {
//     try {
//         const postData = await Post.update(
//             { title: req.body.title, text: req.body.text },
//             {
//                 where: { id: req.params.id }
//             });
//         if (!postData) {
//             res.status(404).json({ message: 'No post with this id!' });
//             return;
//         }
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // delete a post by its `id` value
// router.delete('/:id', async (req, res) => {
//     try {
//         const postData = await Post.destroy({
//             where: { id: req.params.id }
//         });
//         if (!postData) {
//             res.status(404).json({ message: 'No post with this id!' });
//             return;
//         }
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;
