import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan"
      }}
      
    >
      <Text>hello world</Text>
      <Text style = {{
        color: "red",
        fontSize: 20
        
      }}>TantraVeda</Text>
    </View>
  );
}
