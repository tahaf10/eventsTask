import React from 'react'
import { 
    createNativeStackNavigator,
    NativeStackNavigationProp
 } from '@react-navigation/native-stack';
import { Routes } from './routes';
import SplashScreen, { SplashScreenParams } from '../pages/SplashScreen';
import AllEventsPage, { AllEventsScreenParams } from '../pages/AllEventsPage';
import EventPage, { EventScreenParams } from '../pages/EventPage';

// export type MainNavigationProp<
//     RouteName extends keyof AppNavigatorParamsList = string
//     > = NativeStackNavigationProp<AppNavigatorParamsList, RouteName>

export type AppNavigatorParamsList = {
    SplashScreen: SplashScreenParams,
    AllEventsPage: AllEventsScreenParams,
    EventPage: EventScreenParams 
}


const Stack = createNativeStackNavigator<AppNavigatorParamsList>();

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName={Routes.AllEvents}>
            <Stack.Screen name={Routes.Splash} component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AllEvents} component={AllEventsPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Event} component={EventPage} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}
