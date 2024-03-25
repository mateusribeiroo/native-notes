import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import Home from '../pages/home';
import NewCard from '../pages/new-card';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>
                    }}
                />
                <Tab.Screen 
                    name="NewCard" 
                    component={NewCard} 
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                        tabBarLabel: "New"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}