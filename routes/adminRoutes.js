const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.all('/*', (req, res, next) => {
    
    req.app.locals.layout = 'admin';
    
    next();
});


/* DEFAULT ADMIN INDEX ROUTE*/


router.route('/')
    .get(adminController.index);



/* VARIOUS ADMIN POST ENDPOINTS */

router.route('/posts')
    .get(adminController.getPosts);
    


router.route('/posts/create')
    .get(adminController.createPostsGet)
    .post(adminController.submitPosts);



/* ADMIN CATEGORY ROUTES*/


module.exports = router;

