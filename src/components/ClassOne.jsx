import { useState } from "react";
import data from "../../public/data.json";
import TableContaint from "./TableContaint";
export default function ClassOne() {
  const { Class1 } = data;
  const [classOneData] = useState(Class1);
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class One
        </td>
      </tr>
      {classOneData.map((classOne) => (
        <TableContaint
          key={classOne.UserID}
          classOne={classOne}
        ></TableContaint>
      ))}
    </>
  );
}
