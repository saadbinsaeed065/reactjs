import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const useStyles = makeStyles({
    component: {
        margin: '30px 60px'
    },
    container: {
        display: 'flex',
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,
    },
    value: {
        color: '#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 15
    },
    error: {
        background: 'red',
        color: '#fff',
        margin: 50,
        padding: 20
    }
})

const Informationwa = ({ data, city, country }) => {
    const classes = useStyles();

    const getCloudsData = (value) => {
        if(value === 0){
            return 'Clear';
        }else if(value > 1 && value < 100){
            return 'Partially Cloudy';
        }else{
            return 'Cloudy';
        }
    }

    return (
        data && city && country ?
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location:  <Box className={classes.value} component="span">{data.name}, {data.sys.country} </Box></Typography>
                <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature:  <Box className={classes.value} component="span">{data.main.temp}°C </Box></Typography>
                <Typography className={classes.row}><OpacityIcon className={classes.icon} />Humidity:  <Box className={classes.value} component="span">{data.main.humidity}% </Box></Typography>
                <Typography className={classes.row}><Brightness5Icon className={classes.icon} />Sun Rise:  <Box className={classes.value} component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                <Typography className={classes.row}><Brightness6Icon className={classes.icon} />Sun Set: <Box className={classes.value} component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Box></Typography> 
                <Typography className={classes.row}><DehazeIcon className={classes.icon} />Condition:  <Box className={classes.value} component="span">{data.weather[0].main} </Box></Typography>
                <Typography className={classes.row}><CloudIcon className={classes.icon} />Clouds:  <Box className={classes.value} component="span">{getCloudsData(data.clouds.all)} </Box></Typography>
            </Box>
        : !(city && country) ? <Typography className={classes.error}>Please Enter the values to check Weather</Typography> : ''
    )
}

export default Informationwa;