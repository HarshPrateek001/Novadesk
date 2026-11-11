import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function MobileAppDevelopment() {
  return <ServiceTemplate service={servicesData['mobile-app-development']} />;
}
