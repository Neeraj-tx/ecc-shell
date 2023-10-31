import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DDGrid from "./components/dd-grid";
const DD = () => {
  const [filterType, setFilterType] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const handleDocumentType = (event) => {
    setDocumentType(event.target.value);
  };
  const handleFilterType = (event) => {
    setFilterType(event.target.value);
  };
  const handleRedirect = () => {
    setShowResults(true);
  };
  return (
    <div className="w-screen h-auto flex-col justify-center items-start">
      <div className="flex justify-center items-start">
        <div className="p-4 ">
          <FormControl>
            <InputLabel id="DD-Document-Type">Document Type</InputLabel>
            <Select
              sx={{ width: "15rem" }}
              label="DD-Document-Type"
              onChange={handleDocumentType}
              value={documentType}
              id="DD-Document-Type"
              placeholder="Required"
            >
              <MenuItem value="risk-report">Risk Report</MenuItem>
              <MenuItem value="correspondence">Correspondence</MenuItem>
              <MenuItem value="jurisdictional">Jurisdictional</MenuItem>
              <MenuItem value="project-service-plan-correspondence">
                Project Service Plan Correspondence
              </MenuItem>
              <MenuItem value="loss-report">Loss Report</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex-col justify-start items-center p-4">
          <div className="flex justify-start items-center">
            <TextField
              id="index-number"
              label="Index Number"
              variant="outlined"
            />
            <div className="p-2 flex justify-center items-center gap-3 ">
              <button
                onClick={handleRedirect}
                className="rounded-md hover:border-green-800 bg-green-500 text-white py-1 px-2"
              >
                Find
              </button>
              <button
                onClick={() => {
                  setShowResults(false);
                }}
                className="rounded-md hover:border-red-800 bg-red-500 text-white p-1"
              >
                Cancel
              </button>
            </div>
          </div>

          <FormControl
            sx={{
              width: "10rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.25rem",
            }}
          >
            <InputLabel id="DD-Filter-Type">Filter By</InputLabel>
            <Select
              onChange={handleFilterType}
              label="DD-Filter-Type"
              id="DD-Filter-Type"
              value={filterType}
              placeholder="Required"
            >
              <MenuItem value="begins">Begins With</MenuItem>
              <MenuItem value="contains">Contains</MenuItem>
              <MenuItem value="ends">Ends With</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {showResults ? <DDGrid /> : null}
    </div>
  );
};

export default DD;
