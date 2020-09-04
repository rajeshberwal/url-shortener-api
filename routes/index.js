const express = require("express");
const router = express.Router();

// importing model
const Url = require('../models/Url');

//  @route  GET /:urlCode
//  @desc   Redirecting The Short Url to Original Url
router.get('/:urlCode', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.urlCode });

    // if url is avaiable in database then we are going to redirect the short url to original url
    if (url) {
      res.redirect(url.longUrl);
    } else {
      return res.status(404).json('URL Not Found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
});    

module.exports = router;