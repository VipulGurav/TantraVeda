// types/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Regions: undefined;
};

export type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

