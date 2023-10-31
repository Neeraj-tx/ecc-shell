/* eslint-disable react/prop-types */
import { useState } from "react";
import drawerOpen from "../assets/drawer-dark.png";
import drawerClose from "../assets/drawer-light.png";
import {
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { Link } from "react-router-dom";
import SearchableDropdown from "./searchableDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [env, setEnv] = useState("Select Environment");
  const handleEnv = (event) => {
    setEnv(event.target.value);
  };
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center w-screen bg-purple-600 p-3">
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
          <div className="flex justify-center items-center text-center mx-60">
            <FormControl sx={{ width: "9rem", color: "white" }}>
              <InputLabel id="ENV-Type">Select ENV</InputLabel>
              <Select
                label="Select Environment"
                onChange={handleEnv}
                value={env}
                id="ENV-Type"
                placeholder="Select Environment"
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select Env</em>;
                  }

                  return selected;
                }}
              >
                <MenuItem value="Select Env">Select ENV</MenuItem>
                <MenuItem value="DEV01">DEV01</MenuItem>
                <MenuItem value="DEV02">DEV02</MenuItem>
                <MenuItem value="QA21">QA21</MenuItem>
                <MenuItem value="STG02">STG02</MenuItem>
                <MenuItem value="STG18">STG18</MenuItem>
              </Select>
            </FormControl>
            <SearchableDropdown />
          </div>
        </div>
      </Link>
      <Drawer open={isOpen} onClose={handleDrawer}>
        <ul onClick={() => setIsOpen(!isOpen)}>
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
