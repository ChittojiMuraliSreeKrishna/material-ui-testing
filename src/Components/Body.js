import Typography from "@material-ui/core/Typography";
function Body() {
  return (
    <div className="Body">
      <Typography
        color="secondary"
        variant="h1"
        component="h1"
        style={{ height: "200vh" }}
      >
        Hi I'm <br /> Murali Sree Krishna C
      </Typography>
      <Typography>Hey there</Typography>
    </div>
  );
}
export default Body;
