const express = require("express");
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

// importing DB Schema
const Url = require('../models/Url');

//  @route   POST /api/url/shorten
//  @desc    Create Short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get('baseUrl');

  // checking if base url is valid or not
  if (!validUrl.isUri(baseUrl)) {
    res.status(401).json('Invalid Base URL');
  }

  // Creating URL Code for pur shorten url
  const urlCode = shortid.generate();

  // checking long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      // if longUrl is already in database then sending the shorten url
      // else we will genrate new
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });

        await url.save();

        res.json(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json('Serer error');
    }
  } else {
    res.status(401).invalid('Provided URL Is Invalid');
  }
});


module.exports = router;