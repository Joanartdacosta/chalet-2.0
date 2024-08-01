import CardsService from "@/components/dashboard/services/CardService";

export default function ServicesList(props) {
  const NEW_SERVICES = [];

  for (let i = 0; i < props.services.length; i++) {
    NEW_SERVICES.push(props.services[i]);
  }

  return (
    <div className="mt-4">
      {NEW_SERVICES.length > 0 ? (
        <ul>
          {NEW_SERVICES.map((service, index) => (
            <CardsService
              key={index}
              type={service.type}
              projectType={service.projectType}
              description={service.description}
              detail1={service.detail1}
              detail2={service.detail2}
              detail3={service.detail3}
              detail4={service.detail4}
              step1Title={service.step1Title}
              step2Title={service.step2Title}
              step3Title={service.step3Title}
              step4Title={service.step4Title}
              step1={service.step1}
              step2={service.step2}
              step3={service.step3}
              step4={service.step4}
              alt={"chalet_services"}
              imgURL={service.imgURL}
              width={props.width}
              height={props.height}
              isTextFirst={index % 2 === 0}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhum serviço encontrado</p>
      )}
    </div>
  );
}
