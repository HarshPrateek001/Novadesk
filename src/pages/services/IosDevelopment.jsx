import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function IosDevelopment() {
  return <ServiceTemplate service={servicesData['ios-development']} />;
}
