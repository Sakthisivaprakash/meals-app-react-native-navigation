import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute(); // route hook to access param
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return (
    <MealsList items={displayedMeals} />
  )
};

export default MealsOverviewScreen;

