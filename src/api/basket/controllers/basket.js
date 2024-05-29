'use strict';

/**
 * basket controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::basket.basket', ({ strapi }) => ({
  async findByEmail(ctx) {
    const { email } = ctx.params;

    if (!email) {
      return ctx.badRequest('Email is required');
    }

    const basket = await strapi.db.query('api::basket.basket').findMany({
      where: { email: email },
    });

    if (!basket) {
      return ctx.notFound('Basket not found');
    }

    return basket;
  },
}));
