import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../stack/HomeStackScreen';
import SettingsStackScreen from '../stack/SettingsStackScreen';

const TabStack = createBottomTabNavigator();

function SettingTabStackScreen() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Settings" component={SettingsStackScreen} />
            <TabStack.Screen name="Home" component={HomeStackScreen} />
        </TabStack.Navigator>
    );
}

export default SettingTabStackScreen;