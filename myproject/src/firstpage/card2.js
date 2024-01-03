import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard1 from './cardpage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridColumns() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Item>
            <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/81arfNR+-YL._AC_UL480_FMwebp_QL65_.jpg"  name="Teddy" det="I am Mr.teddy,a loveable toy and best friend for kids❤️❤️. "/>
            </center>
          </Item>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/51AWNa6+TOL._AC_UL480_FMwebp_QL65_.jpg"  name="Unicorn" det="I am baby unicorn,full of magic and cuteness🦄🦄. "/>
            </center></Item>
          </Grid>
          <Grid xs={12}>
            <Item> <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/517tM2o269L._AC_UL480_FMwebp_QL65_.jpg" name="Twin buddy" det="hey guys we are twin buddy,a loveable toy and best friend for kids❤️❤️. "/>
            
            </center></Item>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Item>
          <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/51eqAk5srDL._AC_UL480_FMwebp_QL65_.jpg" name="Teddy" det="I am Mr.teddy,a loveable toy and best friend for kids❤️❤️. "/>
           
            </center>
          </Item>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/4109BarP7VL._AC_UL480_FMwebp_QL65_.jpg" name="Teddy" det="I am Mr.teddy,a loveable toy and best friend for kids❤️❤️. "/>
            </center></Item>
          </Grid>
          <Grid xs={6}>
            <Item> <center>
            <MediaCard1 images="https://m.media-amazon.com/images/I/31ZjTsvLhJL._AC_UL480_FMwebp_QL65_.jpg" name="Teddy" det="I am Mr.teddy,a loveable toy and best friend for kids❤️❤️. "/>
            </center></Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
