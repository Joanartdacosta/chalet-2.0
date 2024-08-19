"use client";
import Button from "@/components/common/buttons/Button";
import SERVICES from "@/lists/services";
import { useState } from "react";

export default function ModalSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      filterServices();
    } else if (searchTerm.length >= 3) {
      filterServices();
    }
  };

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
    <div className="flex gap-1 m-auto text-center lg:w-96 ">
      <div className="flex items-center m-auto">
        <input
          className="text-sm poppins border-neutral-300 w-36 lg:w-[20rem]"
          type="text"
          placeholder="Procure pelo servico que pretende"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="lg:w-32 ml-1 w-18">
          <Button onClick={filterServices} label={"Procurar"} />
        </div>
      </div>
    </div>
  );
}
