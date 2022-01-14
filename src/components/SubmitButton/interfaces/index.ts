import {StyleProp, ViewStyle} from 'react-native';

export interface SubmitButtonProps {
  onPress?: () => void | Promise<void>;
  label?: string;
  isLoading?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
