import { useState } from "react";
import data from "../../public/data.json";
import TableContaintThree from "./TableContaintThree";
export default function ClassThree() {
  const { Class3 } = data;
  const [ClassThreeData] = useState(Class3);
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class Three
        </td>
      </tr>
      {ClassThreeData.map((classThree) => (
        <TableContaintThree
          key={classThree.UserID}
          classThree={classThree}
        ></TableContaintThree>
      ))}
    </>
  );
}
