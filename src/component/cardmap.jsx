import { Grid } from '@mui/material'
import React from 'react'
import Contentcard from './contentcard'
import cardlist from './content';

export default function Cardmap() {

const getcoffecard=(coffeobj)=>{
    return(
    <Grid item xs={12} sm={4} >
          <Contentcard {...coffeobj}/>
        </Grid>
    )
}

    return (
        <Grid container spacing={2}>
          {cardlist.map(coffeobj => getcoffecard(coffeobj))}
        </Grid>
    )
}
