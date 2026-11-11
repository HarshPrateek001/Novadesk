import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function ShopifyDevelopment() {
  return <ServiceTemplate service={servicesData['shopify-development']} />;
}
