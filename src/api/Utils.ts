import { SearchFilters } from '../components/shared/enums/Search';
import { Meal } from '../components/shared/types/Meals';

export const getRandomMeals = async () => {
  let count = 0;
  const tempMeals: Meal[] = [];

  try {
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

    return tempMeals;
  } catch (e) {
    console.error(e);
  }
};

interface CategoryJson {
  meals: CategoryData[];
}

interface AreaJson {
  meals: AreaData[];
}
interface CategoryData {
  strCategory: string;
}

interface AreaData {
  strArea: string;
}

export const getCategoryFilterValues = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list
        `
    );
    const responseJson = await response.json();

    let responseData = [];

    responseData = responseJson.meals.map(
      (meal: CategoryData) => meal.strCategory
    );

    console.log(responseData);
    return responseData;
  } catch (e) {
    console.error(e);
  }
};

export const getAreaFilterValues = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list
        `
    );
    const responseJson = await response.json();

    let responseData = [];

    responseData = responseJson.meals.map((meal: AreaData) => meal.strArea);

    console.log(responseData);
    return responseData;
  } catch (e) {
    console.error(e);
  }
};
