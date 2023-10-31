/* eslint-disable react/prop-types */
import { useState } from "react";
import drawerOpen from "../assets/drawer-dark.png";
import drawerClose from "../assets/drawer-light.png";
import { Divider, Drawer, FormControl, MenuItem, Select } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import SearchableDropdown from "./searchableDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [env, setEnv] = useState("Select Env");
  const handleEnv = (event) => {
    setEnv(event.target.value);
  };
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center w-screen bg-tekhelet p-3">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img
            style={{ height: "2rem", width: "2rem" }}
            src={drawerOpen}
            onClick={handleDrawer}
          />

          <h2 className="px-2 text-white">
            Engineering Correspondence Configurator
          </h2>
          <div className="flex justify-center items-center text-center mx-60 rounded-md px-1 gap-4">
            <FormControl sx={{ width: "9rem" }}>
              {/* <InputLabel id="ENV-Type">Select ENV</InputLabel> */}
              <Select
                sx={{ backgroundColor: "white" }}
                label="Select Environment"
                onChange={handleEnv}
                value={env}
                id="ENV-Type"
                placeholder="Select Environment"
              >
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
        <div className="flex justify-between p-2 items-center">
          <h2>Apps</h2>
          <ArrowBackIcon onClick={() => setIsOpen(!isOpen)} />
        </div>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li className="list-none p-2 cursor-pointer">
            <Link to="/mcc"> Manage Currencies</Link>
          </li>
          <li className="list-none p-2 cursor-pointer">
            <Link to="/dd">Document Distribution</Link>
          </li>
          <Divider />
          <li className="list-none p-2 cursor-pointer">
            <Link to="/cfc"> Client File Cabinet</Link>
          </li>
          <li className="list-none p-2 cursor-pointer">
            <Link to="/be">Business Entity</Link>
          </li>
          <Divider />
          <li className="list-none p-2 cursor-pointer">
            <Link to="/rrc"> Risk Report Configurator</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
