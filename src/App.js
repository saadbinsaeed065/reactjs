import React from 'react'
import Sidedrawer from './component/sidedrawer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Card from './component/Card';
import Services from './component/services';
import Home from './component/home';
import { makeStyles } from '@mui/styles';
import Header from './component/header';
import Todoapp from './component/todoapp';
import { Grid } from '@mui/material';
import Weatherapp from './component/weatherapp';

const usestyles=makeStyles({
  appdiv:{
    display:'flex'
  },
  tree:{
    display:'flex',
    flexDirection:'column'
  }
})

export default function App() {
  const classes=usestyles();
  return (
 
    <Router>
    <div className={classes.appdiv}>
{/* we put sidedrwaer componenet out of both grid bcs we apply class to all threee element two grids and one
 drawer to be in flex to avoid overlape or collapse content */}
<Sidedrawer/> 

<Grid container direction='column '>
            <div item>
                    <Header/>
            </div>

            <div  >
                    <Switch>
                    <Route path="/card">
                    <Card/>
                    </Route>
                    <Route path="/services">
                    <Services />
                    </Route>
                    <Route path="/todoapp">
                    <Todoapp/>
                    </Route>
                    <Route path="/weatherapp">
                    <Weatherapp/>
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>

                    </Switch> 
            </div>

</Grid>

   
    </div>
    </Router>
  )
}
