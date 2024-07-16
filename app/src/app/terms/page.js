import Privacy from "@/components/dashboard/privacy/Privacy";
import TermsAndConditions from "@/components/dashboard/privacy/TermsAndConditions";

export default function Terms() {
  return (
    <div className="justify-center m-auto max-w-4xl pb-20">
      <p className="opensans p-10 text-2xl text-center">
        TERMOS DE USO E POLITICA DE PRIVACIDADE
      </p>
      <TermsAndConditions />
      <Privacy />
    </div>
  );
}
