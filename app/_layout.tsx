import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import { Stack } from 'expo-router';
import {CustomHeader} from '../Components/CustomHeader';



export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader/>
        }} />
      </Stack>
  );
}
