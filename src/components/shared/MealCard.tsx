import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';

const MealCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Placeholder Meal Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Placeholder Subcontent
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary">
          <FavoriteBorder />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MealCard;
