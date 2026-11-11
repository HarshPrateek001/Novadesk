import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function EcommerceImplementation() {
  return <ServiceTemplate service={servicesData['ecommerce-implementation']} />;
}
