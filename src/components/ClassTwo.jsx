import { useState } from "react";
import data from "../../public/data.json";
import TableContaintTwo from "./TableContaintTwo";
export default function ClassTwo() {
  const { Class2 } = data;
  const [ClassTwoData] = useState(Class2);
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class Two
        </td>
      </tr>
      {ClassTwoData.map((classTwo) => (
        <TableContaintTwo
          key={classTwo.UserID}
          classTwo={classTwo}
        ></TableContaintTwo>
      ))}
    </>
  );
}
