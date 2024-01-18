import ClassOne from "./ClassOne";
import ClassThree from "./ClassThree";
import ClassTwo from "./ClassTwo";
export default function StudentTable() {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <ClassOne></ClassOne>
          <ClassTwo></ClassTwo>
          <ClassThree></ClassThree>
        </tbody>
      </table>
    </div>
  );
}
