import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stack/HomeStackScreen';
import SettingsStackScreen from '../stack/SettingsStackScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TabStack = createBottomTabNavigator();

function HomeTabStackScreen() {
    return (
        <TabStack.Navigator
            initialRouteName="HOME"
            activeColor='darkslateblue'
            tabBarOptions={{
                showLabel: false,
                style: {
                    elevation: 0,
                    backgroundColor: 'tomato',
                    height: 81
                }
            }
            }

        >
            <TabStack.Screen name="Home" component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name='user-circle-o' size={30} style={{ color: focused ? 'darkslateblue' : 'floralwhite', activeColor: 'darkslateblue' }} />
                            <Text style={{ color: focused ? 'darkslateblue' : 'floralwhite' }}>HOME</Text>
                        </View>
                    )
                }}
            />
            <TabStack.Screen name="Settings" component={SettingsStackScreen}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name='snapchat-ghost' size={30} style={{ color: focused ? 'darkslateblue' : 'floralwhite', activeColor: 'darkslateblue' }} />
                            <Text style={{ color: focused ? 'darkslateblue' : 'floralwhite' }}>Settings</Text>
                        </View>
                    )
                }}

            />
        </TabStack.Navigator>
    );
}

export default HomeTabStackScreen;