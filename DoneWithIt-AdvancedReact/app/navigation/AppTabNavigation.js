// Third Party Imports

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Local Imports
import ListingsNavigation from "./ListingsNavigation";
import AccountNavigation from "./AccountNavigation";
import ListingEditScreen from "../screens/ListingEditScreen";
import NavigationTheme from "./NavigationTheme";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Listings"
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen
            name="Listings"
            component={ListingsNavigation}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={routes.LISTING_EDIT}
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton
                        onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                    />
                ),
            })}
        />
        <Tab.Screen
            name="Account"
            component={AccountNavigation}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="account"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

function AppTabNavigation() {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default AppTabNavigation;
