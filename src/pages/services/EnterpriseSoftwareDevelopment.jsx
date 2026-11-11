import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function EnterpriseSoftwareDevelopment() {
  return <ServiceTemplate service={servicesData['enterprise-software-development']} />;
}
