import CardService from "@/components/dashboard/services/CardService";

export default function Services() {
  return (
    <div className="justify-center m-auto max-w-5xl">
      <p className="opensans p-10 text-2xl text-center">OS MEUS SERVICOS</p>
      <CardService />
    </div>
  );
}
