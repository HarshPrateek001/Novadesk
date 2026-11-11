import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function PhpDevelopment() {
  return <ServiceTemplate service={servicesData['php-development']} />;
}
