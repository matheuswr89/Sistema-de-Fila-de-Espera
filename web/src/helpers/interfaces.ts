export interface LoginInterface {
  email: string;
  senha: string;
}

export interface MessageInterface {
  message: string;
}

export interface AlertInterface{
  message: string;
  error: boolean;
  show?: boolean
}
