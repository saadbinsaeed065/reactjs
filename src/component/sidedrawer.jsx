import React from 'react'
import {  Drawer as MUIdrawer,List,ListItem,ListItemIcon,ListItemText} from '@mui/material';
import { makeStyles } from '@mui/styles';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import DraftsIcon from '@mui/icons-material/Drafts';
import { withRouter } from 'react-router';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

const usestyles=makeStyles({
drawer:{
    width:'180px',
    backgroundColor:'lightblue',
   height:'800px'
}
})
const Sidedrawer=(props)=> {
    const {history}=props;

    const classes=usestyles()
    const itemslist=[{
        text:'Home',
        icon:<InboxIcon color='success'/>,
        onclick:()=>history.push('/')
    },
    {
         text:'Card',
       icon:<LocalActivityIcon color='error' />,
    onclick:()=>history.push('/card') 
}, 
{
         text:'Contact',
        icon:<MarkEmailReadIcon color='warning'/>,
    onclick:()=>history.push('/')
},
 {
          text:'Services',
        icon:<DraftsIcon color='info'/>,
    onclick:()=>history.push('/services')
},{
    text:'TodoApp',
    icon:<PlaylistAddIcon color='error'/>,
    onclick:()=>history.push('/todoapp')
},{
    text:'Weather App',
    icon:<WbCloudyIcon color='success'/>,
    onclick:()=>history.push('/weatherapp')
}
    ]
    return (
        <MUIdrawer variant="permanent" className={classes.drawer}>
            <List className={classes.drawer}>
          {itemslist.map((item, index) => {
              const {text,icon,onclick}=item;
        return(
            <ListItem button key={text} onClick={onclick} >
              <ListItemIcon >
               {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )}
     )}
        </List> 
        </MUIdrawer>
    )
}

export default withRouter(Sidedrawer); 