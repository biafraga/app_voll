import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterAll from "../screens/RegisterAll";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
export default function StackRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="register" component={RegisterScreen} />
                <Stack.Screen name="register_all" component={RegisterAll} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}