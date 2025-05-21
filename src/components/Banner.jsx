import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import bannerImage from "../assets/banner.png"; 


function Banner() {
  return (
    <Box
  sx={{
    width: "100%",
    height: 400,
    backgroundImage:  `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  }}
>
  <Typography
    variant="h3"
    sx={{
      position: "absolute",
      bottom: 20,
      left: 30,
      color: "white",
      textShadow: "1px 1px 3px black",
    }}
  >
    Busca tu personaje favorito
  </Typography>
</Box>
  )
}

export default Banner