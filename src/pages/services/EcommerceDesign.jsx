import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function EcommerceDesign() {
  return <ServiceTemplate service={servicesData['ecommerce-design']} />;
}
