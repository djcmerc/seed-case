import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { BasicMealInfo } from './types/Meals';
import { Link } from 'react-router-dom';

interface MealCardProps {
  mealData: BasicMealInfo;
}

const styles = {
  favIcon: {
    bottom: '10px',
    right: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  }
};
const MealCard = ({ mealData }: MealCardProps) => {
  return (
    <Card>
      <Box sx={{ width: 300, height: 280 }}>
        <Box position="relative">
          <CardActionArea
            component={Link}
            to={`/meals/details/${mealData.idMeal}`}
          >
            <CardMedia
              component="img"
              height="150"
              image={mealData.strMealThumb}
            />
          </CardActionArea>
          <Box position="absolute" sx={styles.favIcon}>
            <IconButton size="small" color="primary">
              <FavoriteBorder />
            </IconButton>
          </Box>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {mealData.strMeal}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MealCard;
