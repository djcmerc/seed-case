import { SearchFilters } from '../components/shared/enums/Search';
import { Meal } from '../components/shared/types/Meals';

export const getRandomMeals = async () => {
  let count = 0;
  const tempMeals: Meal[] = [];
  while (count !== 8) {
    const randomMealResponse = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const mealJson = await randomMealResponse.json();
    const mealData: Meal = mealJson.meals[0];
    const foundMeal = tempMeals.findIndex(
      (meal) => meal.idMeal === mealData.idMeal
    );

    if (foundMeal === -1) {
      tempMeals.push(mealData);
      count++;
    }
  }
  //setMeals(tempMeals);

  return tempMeals;
};

export const getSearchFilterValues = async (filterType: SearchFilters) => {
  const type = filterType === SearchFilters.CATEGORY ? 'c' : 'a';

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?${type}=list
      `
  );
  const responseJson = await response.json();

  let responseData = [];

  if (type === 'c') {
    responseData = responseJson.meals.map((meal: any) => meal.strCategory);
  } else {
    responseData = responseJson.meals.map((meal: any) => meal.strArea);
  }

  return responseData;
};
