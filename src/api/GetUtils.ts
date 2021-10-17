import { SearchFilters } from '../components/shared/enums/Search';
import { BasicMealInfo, Meal } from '../components/shared/types/Meals';

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

    const responseData: string[] = responseJson.meals.map(
      (meal: CategoryData) => meal.strCategory
    );

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

    const responseData: string[] = responseJson.meals.map(
      (meal: AreaData) => meal.strArea
    );

    return responseData;
  } catch (e) {
    console.error(e);
  }
};

export const getMealsBySearch = async (
  searchType: SearchFilters,
  searchValue: string
) => {
  const searchChar = searchType === SearchFilters.MEAL_NAME ? 's' : 'f';
  const fullUrl = `https://www.themealdb.com/api/json/v1/1/search.php?${searchChar}=${searchValue}`;
  try {
    const response = await fetch(fullUrl);
    const responseJson = await response.json();
    const mealData: Meal[] = responseJson.meals;

    if (mealData === null) {
      return [];
    } else {
      return mealData;
    }
  } catch (e) {
    console.error(e);
  }
};

export const getMealsByFilter = async (
  searchType: SearchFilters,
  searchValue: string
) => {
  const searchChar = searchType === SearchFilters.CATEGORY ? 'c' : 'a';
  const fullUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${searchChar}=${searchValue}`;
  try {
    const response = await fetch(fullUrl);
    const responseJson = await response.json();
    const mealData: BasicMealInfo[] = responseJson.meals;

    if (mealData === null) {
      return [];
    } else {
      return mealData;
    }
  } catch (e) {
    console.error(e);
  }
};
