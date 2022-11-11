import { toast } from "react-toastify";
import { FALHA, LOADING, SUCESSO } from "./const";

export const openToast = (acao: any) => {
  toast.promise(acao, {
    pending: LOADING,
    success: SUCESSO,
    error: FALHA,
  });
};
