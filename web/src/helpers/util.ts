import { toast } from "react-toastify";
import { BLOCK, FALHA, LOADING, SUCESSO } from "./const";

export const openToast = (acao: any) => {
  toast.promise(acao, {
    pending: LOADING,
    success: SUCESSO,
    error: FALHA,
  });
};

export const alertBlock = (edit: boolean) => {
  if (edit) toast.error(BLOCK);
};
