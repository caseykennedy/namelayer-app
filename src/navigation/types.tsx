import type { RouteProp as NRouteProp } from '@react-navigation/native';

import type { AuthStackParamList } from './auth-navigator';
import type { TxParamList } from './tx-navigator';

export type RootStackParamList = AuthStackParamList & TxParamList; //  & FooStackParamList & BarStackParamList
// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
