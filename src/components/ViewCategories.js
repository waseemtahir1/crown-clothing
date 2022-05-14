import React from "react";
import Grid from "@mui/material/Grid";

import ViewCategory from "./ViewCategory";

const ViewCategories = ({ categories }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <ViewCategory category={category} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewCategories;
