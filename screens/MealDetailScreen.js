import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch  = useDispatch();

  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFav = favoriteMealIds.includes(mealId);

  function udateFavhandler() {
    // console.log("udateFavhandler Pressed!");
    if(mealIsFav) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="white"
            onPress={udateFavhandler}
          />
        );
      },
    });
  }, [navigation, udateFavhandler]);

  return (
    <ScrollView style={styles.rootCont}>
      <Image source={{ uri: seletedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{seletedMeal.title}</Text>
      <MealDetails
        duration={seletedMeal.duration}
        complexity={seletedMeal.complexity}
        affordability={seletedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listCont}>
          <Subtitle>Ingredients</Subtitle>
          <List data={seletedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={seletedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootCont: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuter: {
    alignItems: "center",
  },
  listCont: {
    width: "80%",
  },
});
