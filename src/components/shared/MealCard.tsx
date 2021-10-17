import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { BasicMealInfo, Meal } from './types/Meals';

interface MealCardProps {
  mealData: BasicMealInfo | Meal;
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
          <CardMedia
            component="img"
            height="150"
            image={mealData.strMealThumb}
          />
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
