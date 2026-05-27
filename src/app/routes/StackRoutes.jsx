// Arquivo que iremos montas as nossas rotas e configurar nossas telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterAll from "../screens/RegisterAll";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="registerAll" component={RegisterAll} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
