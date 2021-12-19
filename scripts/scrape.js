const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const url = 'https://telegov.njportal.com/njmvc/AppointmentWizard';

async function scrape() {
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  // Grab all service container elements
  const items = $('.cards.cardContainer');

  const services = [];

  items.each((_, item) => {
    // Grab the container with the service name and appointment
    const cardButton = $(item).children('.cardButton');
    // Grab the service name
    const name = cardButton.find('a.text-white.text-uppercase').text().trim();
    // Grab appointment
    const appointment = parseInt(
      cardButton.find('a.text-white:not(.text-uppercase)').text().trim().split(' ')[0]
    );

    services.push({ name, appointment });
  });

  fs.writeFile('data.json', JSON.stringify(services, null, 2), (err) => {
    if (err) console.log(err);

    console.log('Services written to data.json');
  });
}

scrape();
