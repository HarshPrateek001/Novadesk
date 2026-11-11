import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function AndroidDevelopment() {
  return <ServiceTemplate service={servicesData['android-development']} />;
}
