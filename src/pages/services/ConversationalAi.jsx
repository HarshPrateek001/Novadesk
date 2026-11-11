import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/servicesData';

export default function ConversationalAi() {
  return <ServiceTemplate service={servicesData['conversational-ai']} />;
}
