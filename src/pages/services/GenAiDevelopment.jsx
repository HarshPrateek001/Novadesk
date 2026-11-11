import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function GenAiDevelopment() {
  return <ServiceTemplate service={servicesData['gen-ai-development']} />;
}
