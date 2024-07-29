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
    <div className="flex gap-1 m-auto text-center w-96 ">
      <div className="flex items-center">
        <input
          className="text-sm poppins border-neutral-300"
          type="text"
          placeholder="Procure pelo servico que pretende"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="w-32 ml-1 ">
          <Button onClick={filterServices} label={"Procurar"} />
        </div>
      </div>
    </div>
  );
}
