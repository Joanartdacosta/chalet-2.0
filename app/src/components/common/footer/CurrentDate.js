export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <hr />
      <div className="p-6 text-custom-darkBrown">
        <p className="text-xs ">© CHALET - Mariana Batista Ramadas</p>
        <p className="text-xs pt-2 ">
          {currentYear} website developed by Joana Costa
        </p>
      </div>
    </div>
  );
}
