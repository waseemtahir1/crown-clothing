import { Delete, Send } from "@mui/icons-material";
import { Button, Typography } from "@mui/material/";

function LearnMUI() {
  return (
    <div>
      {/* Contained Buttons */}
      <div>
        <h1>contained buttons</h1>
        <Button variant="contained" color="secondary" size="medium">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button
          variant="contained"
          startIcon={<Delete />}
          endIcon={<Send />}
          color="warning"
        >
          warning
        </Button>
        <Button variant="contained" color="error" size="large">
          error
        </Button>
      </div>

      {/* Outlined Buttons code */}
      <div>
        <h1>outlined buttons</h1>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
      {/* My Custom Button */}

      <div>
        <h1>My Custom button</h1>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "darkgoldenrod",
            margin: 5,
            border: "solid",
            "&:hover": {
              backgroundColor: "goldenrod",
            },
          }}
        >
          My Custom Button
        </Button>
      </div>

      {/* There is already an h1 in the page, let's not duplicate it. */}
      <div>
        <Typography variant="h4" component="h4">
          h4. Heading
        </Typography>
      </div>
    </div>
  );
}

export default LearnMUI;
