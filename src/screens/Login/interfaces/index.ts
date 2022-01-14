export interface MainProps {
  isLoading: boolean;
  handlePassword: (password: string) => void;
  handleLogin: (login: string) => void;
  handleButtonPress: () => Promise<void>;
}
