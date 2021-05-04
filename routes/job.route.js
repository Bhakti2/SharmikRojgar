const express = require('express')

const { Job } = require('../models/job.model');
const { getRandomLogo } = require("../utils/data");

const jobRouter = express.Router()
const faker = require('faker');



jobRouter.route("/")
  .get(async (req, res) => {
    try {
      const jobs = await Job.find({});
      res.status(200).json({success: true, data: jobs})
    } catch (error) {
      res.staus(500).json({ success: false, messsage: "error while fetching data", error });
    }
  })
  .post(async (req, res) => {
    try {
      const job = new Job({
        title: faker.name.jobType(),
        company: faker.company.companyName(),
        location: faker.address.city(),
        logo: getRandomLogo(),
        description: faker.lorem.paragraph(),
        experience: faker.lorem.text(),
        qualification: faker.lorem.sentence(),
        employment_type: faker.lorem.words()
      })
      await job.save();
      res.status(201).json({ success: true, message: "job is created successfully", data: job });
      console.log(job);
    } catch (error) {
      res.status(500).json({ success: false, message: "erro while creating post", error })
    }
  })

exports.jobRouter = jobRouter;