import { Grid } from '@mui/material'
import React from 'react'
import Cardmap from './cardmap'



export default function Card() {
    return (
        <Grid item container >
             <Grid item xs={false} sm={2}/>
            
             <Grid item xs={12} sm={8}>
                <Cardmap/>

            </Grid>  
           
            <Grid item xs={false} sm={2}/>
         
        </Grid>
    )
}
