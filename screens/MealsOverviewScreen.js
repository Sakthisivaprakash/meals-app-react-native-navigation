
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({route}) => {
    // const route = useRoute(); // route hook to access param
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId)
    });

    const renderMealItem = (itemData) => {
        return <MealItem  title={itemData.item.title}/> 
    }

    return (
        <View style={styles.styles}>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})