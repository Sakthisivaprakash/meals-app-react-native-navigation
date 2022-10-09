import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if(favMeals.length === 0) {
    return(
        <View style={styles.rootCont}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    )
  }

  return <MealsList items={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});
