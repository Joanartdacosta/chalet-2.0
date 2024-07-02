import CardService from "@/components/dashboard/services/CardService";

export default function Services() {
  return (
    <div className="m-auto max-w-5xl justify-center">
      <p className="p-10 text-2xl opensans text-center">OS MEUS SERVICOS</p>
      <CardService />
    </div>
  );
}
