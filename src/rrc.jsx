import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const RRC = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("-");
      var cellDate = new Date(
        Number(dateParts[0]), // Year
        Number(dateParts[1]) - 1, // Month (subtract 1 as months are zero-based)
        Number(dateParts[2]) // Day
      );
      console.log(cellDate, "cellDate");
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        console.log("Zero");
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        console.log("-1");
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        console.log("0");
        return 1;
      }
      return 0;
    },
    minValidYear: 2000,
    maxValidYear: 2021,
    inRangeFloatingFilterDateFormat: "DD MMM YYYY",
  };

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "C-Name", filter: true },
    { field: "C-Type", filter: true },
    { field: "P-Type", filter: true },
    {
      field: "Created Dt",
      filter: "agDateColumnFilter",
      filterParams: filterParams,
    },
    { field: "L-Mod By", filter: true },
    { field: "L-Mod Date", filter: true },
    { field: "Used in DD", filter: true },
    { field: "Copy/Del", filter: true },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    floatingFilter: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from server
  useEffect(() => {
    const a = [
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
      {
        "C-Name": "LE/CTC/AV",
        "C-Type": "User Defined",
        "P-Type": "Equipment Hazards",
        "Created Dt": "2008-08-24",
        "L-Mod By": "penisoral",
        "L-Mod Date": "10-Sep-2010",
        "Used in DD": "Yes",
        "Copy/Del": "Copy/Delete",
      },
    ];
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // .then(result => result.json())
    // .then(rowData =>{
    //   console.log(rowData)
    //   setRowData(rowData)

    // }
    //  )
    setRowData(a);
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div>
      {/* Example using Grid's API */}
      {/* <button onClick={buttonListener}>Push Me</button> */}

      <div style={{ width: "100%" }}>
        <div style={{ textAlign: "right" }} className="mt-2 mb-2 space-x-8 mr-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Create New</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Cancel</button>
        </div>
      </div>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          pagination={true}
        />
      </div>
    </div>
  );
};

export default RRC;
