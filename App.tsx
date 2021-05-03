import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';
import { PlantsProps } from './src/libs/storage';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  useEffect(() => {
    //Resolve o problema para aparecer as notificações enquanto o app está aberto
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantsProps;
        console.log(data);
      });
      return () => subscription.remove();
  
    // async function notifications() { 
    // await Notifications.cancelAllScheduledNotificationsAsync();

    // const data = await Notifications.getAllScheduledNotificationsAsync();
    // console.log('===NOTIFICAÇÕES AGENDADAS===');
    // console.log(data);
    // }

    // notifications();
    

  }, []);

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}

