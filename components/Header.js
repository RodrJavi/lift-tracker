import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const Header = ({text, progress, completion}) => {
  return (
    <div>
      <div className="top-banner">
        <Link href="/">
          <a>
            <Icon className="left-icon" icon="mdi:arrow-left"></Icon>
          </a>
        </Link>
        <h1>{text}</h1>
      </div>
      {completion && <ProgressBar completion={completion}></ProgressBar>}
    </div>
  );
};

export default Header;
