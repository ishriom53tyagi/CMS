const Post = require('../models/PostModel').Post;

module.exports = {
  
    index:  async (req, res) => {
        
        const posts = await Post.find();
        res.render('default/index');
    },
    
    loginGet: (req, res) => {
        res.render('default/login');
    },
    
    loginPost: (req, res) => {
      res.send("Congratulations, you've successfully submitted the data.");  
    },
    
    registerGet: (req, res) => {
        res.render('default/register');
    },
    
    registerPost: (req, res ) => {
        res.send("Successfully Registered.");
    }
    
};
