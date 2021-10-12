import {React,useState }from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { IconButton, Grid, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const usestyle=makeStyles({
    root:{
marginTop:'50px',
textAlign:'center'
    },
    tree:{
        backgroundColor:'lightblue',
        color:'red',
        margin:'5px'
    }
})

export default function Todoapp() {
const classes=usestyle()

const [text, settext] = useState({todoip:''})

const onhandle=(e)=>{
    const {name,value}=e.target
    settext({...text,[name]:value})
}

const [record, setrecord] = useState([])
const addtodo=()=>{
   if(!text.todoip){

   }else{
       const newrecord={...text,id:new Date().getTime().toString()}
   setrecord([...record,newrecord])
   settext({todoip:''})
    }
}

const delitem=(id)=>{
    setrecord(()=>{
        return record.filter((ele,index)=>{
       return(id!==index)
        })
    })
}

const clearall=()=>{
    setrecord([])
}



    return (
        <>
        <div className={classes.root} >
            <Grid item container >
                <Grid item xs={false} sm={2}/>
                
                <Grid item xs={10} sm={6}>
                <TextField fullWidth  label="Enter your Todo's" value={text.todoip} name='todoip' onChange={onhandle} /> 
                </Grid>
                <Grid item xs={2} sm={2}>
                <IconButton><AddIcon color='error' fontSize='large' onClick={addtodo}/></IconButton>   
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Button onClick={clearall}>Clear All</Button>
                </Grid>
           
            </Grid>
       
        </div>
                          
                         <List  >
                                {record.map((ele,index) => {
                                    const {todoip}=ele
                                    return(
                                        <>
                                        <Grid item container  >
                                        <Grid item xs={2} sm={4}/>
                                       
                                        <Grid item xs={8} sm={4} >
                                              <ListItem className={classes.tree}
                                                key={index}
                                                    secondaryAction={
                                                    <IconButton>
                                                        <DeleteOutlineIcon  color='info' onClick={()=>delitem(index)}/>
                                                    </IconButton>
                                                    }
                                                >
                                                        <ListItemText primary={todoip} />
                                                </ListItem>
                                        </Grid>
                                       <Grid item xs={2} sm={4}/>
                                       </Grid>
                               </>
                                    )
                                
                                })}
                            </List>

         </>                            
    )
}
