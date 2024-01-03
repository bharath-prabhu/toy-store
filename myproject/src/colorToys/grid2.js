import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
//import MediaCard1 from './cardpage';
///import MediaCard2 from './cardimage';
import MediaCard3 from './colorToys';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridColumns3() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Item>
            <center>
             
            <MediaCard3 images="https://m.media-amazon.com/images/I/41SxZPP92kL._AC_UL480_FMwebp_QL65_.jpg"  name="VGRASSP Bot " det="VGRASSP Robot Pioneer Colorful Lights,Music All Direct Movement Dancing Robot☠️☠️"/>
            </center>
          </Item>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard3 images="https://m.media-amazon.com/images/I/51HyFX6nkNL._AC_UL480_FMwebp_QL65_.jpg"  name="Spinner" det="TRU TOYS Crystal Colorful Transparent Light Spinner Anti Stress Fidget Toys. "/>
            </center></Item>
          </Grid>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard3 images="https://m.media-amazon.com/images/I/41UbqtnGdVL._AC_UL480_FMwebp_QL65_.jpg" name=" Princess Toy Doll" det="Dancing Miracle Princess Toy Doll with Wings Interactive Revolving Cute Doll❤️❤️. "/>
            
            </center></Item>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Item>
          <center>
            <MediaCard3 images="https://m.media-amazon.com/images/I/418DCmJZoyL._AC_UL480_QL65_.jpg" name="FAVELA" det="FAVELA® Led Flashing Luminous Rubber Bouncing Anti-Stress Light Gift Fun Toys👻👻"/>
           
            </center>
          </Item>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard3 images="https://m.media-amazon.com/images/I/71j+oCqRQXL._AC_UL480_QL65_.jpg" name="Bikky" det="Wrixty Kid's White and Red Sports Ride,Working Lights and Training Wheels🏍️🏍️"/>
            </center></Item>
          </Grid>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard3 images="https://m.media-amazon.com/images/I/51Q2PUSnDrL._AC_UL480_QL65_.jpg" name="SOJOURN " det="Plastic Bicycle Toy with Flashing Lights Music 360 Degree Rotation Bicycle❤️❤️. "/>
            </center></Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
