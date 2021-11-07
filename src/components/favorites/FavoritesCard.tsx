import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BasicMealInfo } from '../shared/types/Meals';

interface FavoriteCardProps {
  mealInfo: BasicMealInfo;
}
const FavoriteCard = ({ mealInfo }: FavoriteCardProps) => {
  return (
    <Card sx={{ display: 'flex', width: 550 }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={mealInfo.strMealThumb}
      />
      <Box display="flex" flexDirection="column">
        <CardContent>
          <Typography component="div" variant="h5">
            {mealInfo.strMeal}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FavoriteCard;
