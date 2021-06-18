import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SchoolIcon from "@material-ui/icons/School";

const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Home Page</Typography>
      </Box>
      {isMobile ? (
        <Box textAlign="right">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to={process.env.PUBLIC_URL + "/College"}
          >
            <SchoolIcon style={{ marginRight: 15 }} />
            <Typography variant="button">College</Typography>
            <ChevronRightIcon />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </div>
  );
};
export default Home;
