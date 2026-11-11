import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function ErpSoftwareDevelopment() {
  return <ServiceTemplate service={servicesData['erp-software-development']} />;
}
