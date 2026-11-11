import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function CustomSoftwareDevelopment() {
  return <ServiceTemplate service={servicesData['custom-software-development']} />;
}
