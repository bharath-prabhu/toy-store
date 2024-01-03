import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
//import MediaCard1 from './cardpage';
import MediaCard2 from './cardimage';
//import TransparentForm from '../ItemPicked/ItemPicked';
import Move from '../ItemPicked/Move';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridColumns2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Item>
            <center>
               
            <MediaCard2 images="https://m.media-amazon.com/images/I/61x9JGjs+gL._AC_UL480_FMwebp_QL65_.jpg"  name="Red Lambo" det="SUPER TOY Rc High Speed Sports Racing Car Remote Control Toy For Boys - Multi Color, Kid❤️❤️. "/>
            
            
            </center>
          </Item>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard2 images="https://m.media-amazon.com/images/I/7142UbqLYrL._AC_UL480_FMwebp_QL65_.jpg"  name="HScopter Gesture" det=" RC Car 2.4Ghz Remote Control 4WD Stunt Vehicle Truck with Light Music Effect Mini Toy Gift for Kids Birthday Chirstams Party (Green). "/>
            </center></Item>
          </Grid>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard2 images="https://m.media-amazon.com/images/I/71Ecrpbub5L._AC_UL480_FMwebp_QL65_.jpg" name="Transformer" det="SUPER TOY 2in1 Transform Convertible RC Robot Car Toy for Kids - Multicolorimage.png🏎️🏎️. "/>
            
            </center></Item>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Item>
          <center>
            <MediaCard2 images="https://m.media-amazon.com/images/I/512iZ9CjWRL._AC_UL480_FMwebp_QL65_.jpg" name="Skygenix" det="Scale RC Cars 2.4GHz Fast Stunt Car, 4WD Rotating RC Trucks with, Gesture Sensor Remote Control Toy Cars/Best Gifts for 8-12 Years Boys- Pack of 1 (Blue)❤️❤️. "/>
           
            </center>
          </Item>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard2 images="https://m.media-amazon.com/images/I/71kmdQ8xbQL._AC_UL480_FMwebp_QL65_.jpg" name="Mirana" det="Mirana USB Rechargeable Remote Control Stunt Toy Car| Stunt 360 Rotating Rolling RC Car Gift for Boys and Girls Kids (Coral Red) faster chargeable ❤️❤️. "/>
            </center></Item>
          </Grid>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard2 images="https://m.media-amazon.com/images/I/81Odz46Z02L._AC_UL960_FMwebp_QL65_.jpg" name="Zest speed" det="Zest 4 Toyz Remote Control Car For Kids With Mist Smoke Effect 2 Wd Monster Truck Rock Crawler Climbing Rc Toy Vehicle Car For Boys And Girls-Black❤️❤️. "/>
            </center></Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
