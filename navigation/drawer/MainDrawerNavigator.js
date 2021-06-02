import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeDrawerScreen from './HomeDrawerScreen';
import SettingDrawerScreen from './SettingDrawerScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeDrawerScreen} />
            <Drawer.Screen name="Setting" component={SettingDrawerScreen} />
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;