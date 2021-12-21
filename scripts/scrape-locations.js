#!/usr/bin/env node
const cheerio = require('cheerio');
const axios = require('axios');

const url = 'https://telegov.njportal.com/njmvc/AppointmentWizard';

async function scrape() {
  const { data } = await axios.get(url, { withCredentials: true });
  const $ = cheerio.load(data);

  const scripts = $('script[type="text/javascript"]');

  console.log($.html());

  scripts.each((index, script) => {
    const text = $(script).html();

    if (text.includes('locationData')) {
      console.log(text);
    }
  });
}

scrape();
