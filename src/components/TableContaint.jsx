export default function TableContaint({ classOne }) {
  const { UserID, Name, Scores, Percentage, Image } = classOne;
  return (
    <>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{UserID}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src={Image}
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{Name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{Scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">{Percentage}%</td>
      </tr>
    </>
  );
}
