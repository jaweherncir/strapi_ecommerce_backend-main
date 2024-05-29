'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/baskets/email/:email',
      handler: 'basket.findByEmail',
      config: {
        auth: false, // Set to true if you want authentication
      },
    },
  ],
};
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::basket.basket');