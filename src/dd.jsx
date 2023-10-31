import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const DD = () => {
  const [documentType, setDocumentType] = useState("");
  const handleDocumentType = (event) => {
    setDocumentType(event.target.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="p-4  ">
        <Select
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
      </div>
      <div className="flex-col justify-start items-center p-4">
        <div className="flex justify-start items-center">
          <TextField
            id="index-number"
            label="Index Number"
            variant="outlined"
          />
          <Button variant="primary">Find</Button>
          <Button variant="danger">Cancel</Button>
        </div>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="contains"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="begins-with"
            control={<Radio />}
            label="Begins With"
          />
          <FormControlLabel
            value="contains"
            control={<Radio />}
            label="Contains"
          />
          <FormControlLabel
            value="ends-with"
            control={<Radio />}
            label="Ends With"
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default DD;
