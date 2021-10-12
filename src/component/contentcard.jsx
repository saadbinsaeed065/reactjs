import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';

export default function Contentcard(props) {
    const {title,price,description,avatarUrl,imageUrl}=props;
    return (
        <Card >
             <CardHeader
        avatar={
          <Avatar src={avatarUrl}/>     
        }
        action={
          <IconButton aria-label="settings">
           <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={price}
      />
       <CardMedia
       style={{height:'150px'}}
    image={imageUrl}
       
      />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {description}
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small">Buy Now</Button>
          <Button size="small">Offer Now</Button>
        </CardActions>
      </Card>
    )
}
