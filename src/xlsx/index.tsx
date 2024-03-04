import React from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

class ExportTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // Your table data goes here
        { name: "John Doe", age: 25, city: "New York" },
        { name: "Jane Smith", age: 30, city: "San Francisco" },
        // Add more rows as needed
      ],
      fileName: "tableData",
    };
  }

  exportToExcel = () => {
    const { data, fileName } = this.state;
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  render() {
    const { data, fileName } = this.state;

    return (
      <div>
        <table>
          {/* Your table headers */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          {/* Your table data */}
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Export buttons */}
        <button onClick={this.exportToExcel} className="mr-4">
          Export to Excel
        </button>
        <CSVLink data={data} filename={`${fileName}.csv`}>
          Export to CSV
        </CSVLink>
      </div>
    );
  }
}

export default ExportTable;
