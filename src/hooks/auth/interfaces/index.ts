export interface AuthContextData {
  logIn: (props: LoginProps) => Promise<void>;
  loggedIn: boolean;
}

export interface LoginProps {
  password: string;
  login: string;
}
