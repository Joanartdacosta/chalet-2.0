"use client";
import ModalSearch from "@/components/dashboard/services/ModalSearch";
import SERVICES from "@/components/lists/services";
import ServicesList from "@/components/dashboard/services/ServiceList";
import { useState } from "react";

export default function Services() {
  const [services, setServices] = useState(SERVICES);

  return (
    <div className="m-auto max-w-6xl">
      <header>
        {" "}
        <h2 className="opensans p-10 text-2xl text-center">OS MEUS SERVICOS</h2>
      </header>

      <ModalSearch setServices={setServices} />
      <ServicesList services={services} />
    </div>
  );
}
