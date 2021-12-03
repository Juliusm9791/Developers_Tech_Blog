const router = require('express').Router();
const { User, Post, Comment, PostComment } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all posts
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User, exclude: ['password'] }, { model: Post }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Comment.create({
            comment_text: req.body.text,
            userId: req.session.userId,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(postData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
