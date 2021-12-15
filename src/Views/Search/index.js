import MaterialTable from "material-table";
import { Button, TextField } from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef, useState } from "react";
import axios from "axios";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const SearchPage = () => {
  const onSubmit = () => {
    var data = JSON.stringify({
      searchQuery: values.query,
      location: values.location,
      noOfLeads: values.leads,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/v1/search",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setData(response.data.responses);
        console.log(response.data.responses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let columns = [
    { title: "Name", field: "title" },
    { title: "Address", field: "address" },
    { title: "Phone", field: "phone" },
    { title: "Website", field: "link" },
  ];

  const [values, setValues] = useState({
    query: "pizza",
    location: "Pune,Maharashtra,India",
    leads: 20,
  });

  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="mt-5 container text-center">
      <TextField
        className="mx-3"
        required
        name="query"
        value={values.query}
        id="outlined-required"
        label="Query"
        onChange={handleChange}
      />
      <TextField
        className="mx-3"
        required
        name="location"
        value={values.location}
        id="outlined-required"
        label="Location"
        onChange={handleChange}
      />
      <TextField
        className="mx-3"
        required
        name="leads"
        value={values.leads}
        id="outlined-required"
        label="Number of Leads"
        type="number"
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" className="mt-5" onClick={onSubmit}>
        Submit
      </Button>
      <div className="mt-5">
        <MaterialTable
          icons={tableIcons}
          title="Leads"
          columns={columns}
          data={data}
          options={{
            exportButton: true,
          }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
