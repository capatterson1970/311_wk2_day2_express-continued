const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comments');

//get all comments
router.get('/comments', commentController.list);

//get one comment with id
router.get('/comments/:id', commentController.show);

//post comment
router.post('/comments', commentController.create);


module.exports = router;