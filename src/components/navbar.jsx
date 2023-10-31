import { useState } from "react";
import drawerOpen from "../assets/drawer-dark.png";
import drawerClose from "../assets/drawer-light.png";
import { Divider, Drawer } from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center bg-purple-600 p-3">
      <Link to="/">
        <div className="flex justify-center items-center">
          {isOpen ? (
            <img
              style={{ height: "1.5rem", width: "1.5rem" }}
              src={drawerOpen}
              onClick={handleDrawer}
            />
          ) : (
            <img
              style={{ height: "1.5rem", width: "1.5rem" }}
              src={drawerClose}
              onClick={handleDrawer}
            />
          )}
          <h2 className="px-2 text-white">
            Engineering Correspondence Configurator
          </h2>
        </div>
      </Link>
      <Drawer open={isOpen} onClose={handleDrawer}>
        <ul>
          <li className="list-none p-2 cursor-pointer">
            <Link to="/rrc"> Risk Report Configurator</Link>
          </li>
          <li className="list-none p-2 px-3 cursor-pointer">
            <Link to="/rrc/view"> View Risk Report Configurations</Link>
          </li>
          <li className="list-none p-2 px-3 cursor-pointer">
            <Link to="/rrc/modify"> Modify Risk Report Configuration</Link>
          </li>
          <li className="list-none p-2 px-3 cursor-pointer">
            <Link to="/rrc/create"> Create Risk Report Configuration</Link>
          </li>
          <Divider />
          <li className="list-none p-2 cursor-pointer">
            <Link to="/dd">Document Distribution</Link>
          </li>
          <Divider />
          <li className="list-none p-2 cursor-pointer">
            <Link to="/irn"> Index Number/ Special Assignment</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
