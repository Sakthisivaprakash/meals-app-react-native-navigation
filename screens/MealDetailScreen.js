import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const seletedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    console.log('headerButtonHandler PRessed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => {
            return <Button title="Tap me!" onPress={headerButtonHandler} />
        }
    })
  }, [])

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
