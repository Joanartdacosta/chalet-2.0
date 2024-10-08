"use client";
import ModalSearch from "@/components/dashboard/services/ModalSearch";
import SERVICES from "@/lists/services";
import ServicesList from "@/components/dashboard/services/ServiceList";
import { useState } from "react";

export default function Services() {
  const [services, setServices] = useState(SERVICES);

  return (
    <div className="lg:max-w-6xl m-auto">
      <header>
        {" "}
        <h3 className="opensans p-24 text-2xl text-center">OS MEUS SERVICOS</h3>
      </header>

      <ModalSearch setServices={setServices} />
      <ServicesList services={services} />
    </div>
  );
}
