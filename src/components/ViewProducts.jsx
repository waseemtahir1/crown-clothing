import React, { useContext } from "react";
import { ProductsConext } from "../contexts/products.context";
import { experimentalStyled as styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, margin } from "@mui/system";
import { Container, IconButton, Paper } from "@mui/material";

const ViewProducts = () => {
  const { products } = useContext(ProductsConext);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((items) => (
        <Grid
          item
          xs={2}
          sm={4}
          md={2}
          key={items.id}
          style={{ content: "center" }}
        >
          <Card sx={{ maxWidth: 345, marginTop: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "whitesmoke" }} aria-label="recipe">
                  <img src={items.thumbnail} width="70px" alt="" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={items.title}
              subheader={items.category}
            />
            <CardMedia
              component="img"
              height="194"
              image={items.thumbnail}
              alt={items.title}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: 80 }}
              >
                {items.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewProducts;
