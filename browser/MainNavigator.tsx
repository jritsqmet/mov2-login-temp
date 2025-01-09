import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegistroScreen from "../screens/RegistroScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack= createStackNavigator()

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={ LoginScreen} 
            options={()=> ({headerShown: false})}/>
            <Stack.Screen name="Registro" component={ RegistroScreen} />
            <Stack.Screen name="Welcome" component={ WelcomeScreen} />
        </Stack.Navigator>
    )
} 

export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}