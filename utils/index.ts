import axios from 'axios';
import cheerio from 'cheerio';

export interface Service {
  id: number;
  name: string;
  appointment: number;
}

export interface Data {
  data: Service[];
}

const url = 'https://telegov.njportal.com/njmvc/AppointmentWizard';

const cache = new Map();
const FIVE_MINUTES = 60000 * 5;

export async function getServices(): Promise<Service[]> {
  const lastTime: number = cache.get('lastTime');
  const cachedServices = cache.get('services');
  if (cachedServices && Date.now() - lastTime <= FIVE_MINUTES) {
    console.log('Returning cache...');
    return cachedServices;
  }

  cache.delete('services');
  cache.delete('lastTime');

  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  // Grab all service container elements
  const items = $('.cards.cardContainer');

  const services: Service[] = [];

  items.each((index, item) => {
    // Grab the container with the service name and appointment
    const cardButton = $(item).children('.cardButton');
    // Grab the service name
    const name = cardButton.find('a.text-white.text-uppercase').text().trim();
    // Grab appointment
    const appointment = parseInt(
      cardButton.find('a.text-white:not(.text-uppercase)').text().trim().split(' ')[0]
    );

    const serviceId = cardButton.find('a.text-white').attr('href')!.split('/').pop()!;
    const id = parseInt(serviceId);

    services.push({ name, appointment, id });
  });

  cache.set('services', services);
  cache.set('lastTime', Date.now());
  console.log('Storing into cache...');
  return services;
}

export async function getServiceById(id: number) {
  const { data } = await axios.get(`${url}/${id}`);
  const $ = cheerio.load(data);

  const services = await getServices();
  const service = services.find((s) => s.id === id)!;

  return service;
}
