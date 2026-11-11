import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function SaasDevelopment() {
  return <ServiceTemplate service={servicesData['saas-development']} />;
}
