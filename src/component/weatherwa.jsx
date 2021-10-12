import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from '../img/bg.jpg';
import Formwa from './formwa';


const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '80%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '73%',
        height: '80%',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
    }
})

const Weatherwa = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Formwa />
            </Box>
        </Box>
    )
}

export default Weatherwa;