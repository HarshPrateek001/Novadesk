import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function FullStackDevelopment() {
  return <ServiceTemplate service={servicesData['full-stack-development']} />;
}
