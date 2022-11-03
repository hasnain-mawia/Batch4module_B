import Switch from "@mui/material/Switch";

function SMSwitch(props) {
  const { label, onChange, value } = props;
  return (
    <>
      <Switch value={value} label={label} onChange={onChange} />
    </>
  );
}
export default SMSwitch;
