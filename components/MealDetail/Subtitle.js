import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleCont}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleCont: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
      },
});
