const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      console.log(req.body)
      const newProject = await Blog.create({
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
      console.log(req.body)
      await Blog.update(
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
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;