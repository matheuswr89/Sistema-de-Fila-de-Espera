import { OrderByDirection } from "firebase/firestore";

export interface LoginInterface {
  email: string;
  senha: string;
  name?: string;
}

export interface AlertInterface {
  message: string;
  error: boolean;
}

export interface ContextInterface {
  authenticated?: boolean;
  user?: any;
  loading?: boolean;
  login?: (value: LoginInterface) => void;
  logout?: () => void;
  error?: boolean;
}

export interface SenhaInterface {
  date: number;
  senha: number;
  sendoAtendido: boolean;
  type: string;
}

export interface LastQueue {
  order: OrderByDirection;
  tipo: number;
  type: string;
}

export interface TabInterface {
  component: React.ReactElement;
  value: string;
  name: string;
  icon: React.ReactElement;
}

export interface NoticiasInterface {
  termo: string;
  pais: string;
  categoria: string;
}

export interface CotacaoInterface {
  value: string;
  label?: string;
}

export interface PrevisaoInterface {
  lat: number;
  lon: number;
}

export interface ConfiguracaoInterface {
  tempoApi: number;
}
