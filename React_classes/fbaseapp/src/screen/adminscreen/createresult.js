import { Box, Grid } from "@mui/material";
import { useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMSelect from "../../config/components/SMSelect";
import SMSwitch from "../../config/components/SMSwitch";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC123",
      result: "Pass",
    },
  ]);

  let submitForm = () => {
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
  };
  return (
    <>
      <h1>Create Result</h1>
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <SMSwitch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <SMSelect
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <SMButton label="Submit" onClick={submitForm} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default CreateResult;
