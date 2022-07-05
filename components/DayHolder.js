import { useReadLocalStorage } from "usehooks-ts";
import saveStuff from "./SaveStuff";
import { useState } from "react";

const DayHolder = () => {
  const sessionList = useReadLocalStorage("sessionList");
  const [worky, setWorky] = useState(sessionList);
  return (
    <div>
      <saveStuff works={worky}></saveStuff>
    </div>
  );
};

export default DayHolder;
