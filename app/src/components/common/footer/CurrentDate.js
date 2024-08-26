export default function CurrentDate() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center">
      <hr />
      <div className="p-6 text-custom-darkBrown poppins">
        <p className="text-xs bold ">© CHALET - Mariana Batista Ramadas</p>
        <p className="text-xs pt-2 italic font-thin">
          {currentYear} website developed by Joana Costa
        </p>
      </div>
    </div>
  );
}
