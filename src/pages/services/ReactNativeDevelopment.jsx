import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function ReactNativeDevelopment() {
  return <ServiceTemplate service={servicesData['react-native-development']} />;
}
