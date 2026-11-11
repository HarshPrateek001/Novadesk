import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function WoocommerceDevelopment() {
  return <ServiceTemplate service={servicesData['woocommerce-development']} />;
}
