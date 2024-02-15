const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newProject = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  router.put('/:id', async (req, res) => {
    try {
      await Post.update(
        {
          title: req.body.title,
          content: req.body.content
        },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id
          },
        }
      );
      res.status(200).end();
    } catch {
      res.status(500).end();
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;