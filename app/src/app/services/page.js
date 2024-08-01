"use client";
import ModalSearch from "@/components/dashboard/services/ModalSearch";
import SERVICES from "@/lists/services";
import ServicesList from "@/components/dashboard/services/ServiceList";
import { useState } from "react";

export default function Services() {
  const [services, setServices] = useState(SERVICES);

  return (
    <div className="m-auto max-w-6xl">
      <p className="opensans p-16 text-2xl text-center">OS MEUS SERVICOS</p>
      <ModalSearch setServices={setServices} />
      <ServicesList services={services} />
    </div>
  );
}
