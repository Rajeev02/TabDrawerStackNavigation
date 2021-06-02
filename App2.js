import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress={() => navigation.navigate('Details')}
                    title="Go to Details"
                />
            </View>
        </View>
    );
}
function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => navigation.goBack()} title="Go back home" />
            </View>
        </View>
    );
}




const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}



const TabStack = createBottomTabNavigator();

function SettingTabStackScreen() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Settings" component={SettingsStackScreen} />
            <TabStack.Screen name="Home" component={HomeStackScreen} />
        </TabStack.Navigator>
    );
}

function HomeTabStackScreen() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Home" component={HomeStackScreen} />
            <TabStack.Screen name="Settings" component={SettingsStackScreen} />
        </TabStack.Navigator>
    );
}


const Drawer = createDrawerNavigator();



function HomeDrawerScreen({ navigation }) {
    return (
        <HomeTabStackScreen />
    );
}

function SettingDrawerScreen({ navigation }) {
    return (
        <SettingTabStackScreen />
    );
}



function DrawerStackScreen() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeDrawerScreen} />
            <Drawer.Screen name="Setting" component={SettingDrawerScreen} />
        </Drawer.Navigator>
    );
}


function App() {
    return (
        <NavigationContainer>
            <DrawerStackScreen />
        </NavigationContainer>
    );
}

export default App;