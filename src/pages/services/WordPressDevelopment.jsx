import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function WordPressDevelopment() {
  return <ServiceTemplate service={servicesData['wordpress-development']} />;
}
