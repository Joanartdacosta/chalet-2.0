"use client";
import Button from "@/components/common/buttons/Button";
import SERVICES from "@/components/lists/services";
import { useState } from "react";

export default function ModalSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function filterServices() {
    const LOWER_CASE_SEARCH = searchTerm.toLowerCase();

    const filtered = SERVICES.filter(
      (category) =>
        category.projectType.toLowerCase().includes(LOWER_CASE_SEARCH) ||
        category.type.toLowerCase().includes(LOWER_CASE_SEARCH)
    );

    props.setServices(filtered);
  }

  return (
    <div className="flex gap-1 m-auto text-center w-96">
      <div className="flex">
        <input
          className="text-sm poppins"
          type="text"
          placeholder="Procure pelo servico que pretende"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="w-32">
          <Button onClick={filterServices} />
        </div>
      </div>
    </div>
  );
}
