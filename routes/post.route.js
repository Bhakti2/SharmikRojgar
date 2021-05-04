const express = require('express')
const postRouter = express.Router();
const { Post } = require('../models/post.model');
const { getAvatar } = require('../utils/data');
const { getRandom } = require('../utils/data');
const faker = require('faker');
postRouter.route("/")
  .get(async (req, res) => {
    try {
      const posts = await Post.find({})
      res.status(201).json({success: true, data: posts})
    } catch(error) {
      res.status(404).json({success: false, message: "eror while fetching data", error})
    }
  })
  .post(async (req, res) => {
    try {
      const post = new Post({
        avatar: getAvatar(),
        user: faker.name.findName(),
        designation: faker.name.jobTitle(),
        description: faker.lorem.paragraph(),
        img: getRandom()
      })
      await post.save();
      res.status(201).json({success: true, message: "post created successfully", data: post});
    } catch(error) {
      res.status(500).json({sucess: false, message: "error while createing post", error})
    }
  })


exports.postRouter = postRouter;