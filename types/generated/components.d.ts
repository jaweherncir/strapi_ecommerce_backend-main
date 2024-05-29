import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderComponentsProduct extends Schema.Component {
  collectionName: 'components_order_components_products';
  info: {
    displayName: 'product';
    icon: 'television';
    description: '';
  };
  attributes: {
    product: Attribute.String & Attribute.Required;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-components.product': OrderComponentsProduct;
    }
  }
}
