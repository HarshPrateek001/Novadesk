import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function CmsDevelopment() {
  return <ServiceTemplate service={servicesData['cms-development']} />;
}
