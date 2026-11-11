import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function MvpDevelopment() {
  return <ServiceTemplate service={servicesData['mvp-development']} />;
}
