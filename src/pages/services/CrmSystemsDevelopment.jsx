import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function CrmSystemsDevelopment() {
  return <ServiceTemplate service={servicesData['crm-systems-development']} />;
}
