import React from 'react';
import { Stack } from 'expo-router';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {CustomHeader} from '@/Components/CustomHeader';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader/>
        }} />
      </Stack>
    </BottomSheetModalProvider>
  );
}
