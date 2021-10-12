import  React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const usestyle=makeStyles({
    root:{
        // backgroundColor:"blue",
        textAlign:"center",
        color:"red"
    }
})
export default function Home() {
    const classes=usestyle()
    return (
        <>
        
<Grid container spacing={5}  >
  <Grid item xs={12} className={classes.root}>
    <p className={classes.root}>xs=8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam 
    soluta sed laudantium, voluptatibus a at hic quas odit unde, esse laboriosam itaque eveniet eum
     obcaecati cumque. Quasi amet incidunt harum.</p>
  </Grid>
  <Grid item xs={4} >
    <p className={classes.root}>xs=4</p>
  </Grid>
  <Grid item xs={4}>
    <p className={classes.root}>xs=4</p>
  </Grid>
  <Grid item xs={8}>
    <p className={classes.root}>xs=8</p>
  </Grid>
  <Grid item container xs={12}>
     <Grid item xs={6} sm={4}>
<p className={classes.root}> hello saad</p>
     </Grid>
     <Grid item xs={6} sm={4}>
     <p className={classes.root}> hello afaq</p>
     </Grid>
     <Grid item xs={6} sm={4}>
     <p className={classes.root}> hello sajjad</p>
     </Grid>
  </Grid>
</Grid>

        </>
    )
}
