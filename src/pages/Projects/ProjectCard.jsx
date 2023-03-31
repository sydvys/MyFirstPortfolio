import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ heading, link, pic, bg }) {
  return (
    <Card  sx={{ maxWidth: 350, mx:"auto", }}>
        <CardMedia
          component="img"
          image={pic}
          alt="demo pic"
          sx={{paddingTop:1.5, backgroundColor:bg}}
          
        />
        <CardContent sx={{ height: 40, }}>
          <Typography gutterBottom component="div" sx={{fontSize:22, fontWeight:500}}>
            {heading}
          </Typography>
        </CardContent>
      <CardActions>
        <Button href={link} target="_blank" sx={{color:"#000",}}>
         GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}