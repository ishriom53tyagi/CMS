const Post = require('../models/PostModel').Post;
const express=require("express");
app=express();
module.exports = {
    index: (req, res) => {
        res.render('admin/index');

    },


    /* ADMIN POSTS ENDPOINTS */


    getPosts: (req, res) => {    
      res.render('admin/posts/index');
    },


    createPostsGet: (req, res) => {
            res.render('admin/posts/create');
    },

    submitPosts: (req, res) => {

        const commentsAllowed = req.body.allowComments ? true : false;

        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            allowComments: commentsAllowed,
         
        });
         newPost.save().then(post => {
		    console.log(req.body.title);
            req.flash('success-message', 'Post created successfully.');
            res.redirect('/admin/posts');
        });


    },

    /* ALL CATEGORY METHODS*/
};    
    
