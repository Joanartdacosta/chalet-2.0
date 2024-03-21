export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className="text-xs italic pt-2"> CHALET - Mariana Batista Ramadas</p>

      <p className="pt-2 pb-2">
        © {currentYear} website developed by Joana Costa
      </p>
    </div>
  );
}
