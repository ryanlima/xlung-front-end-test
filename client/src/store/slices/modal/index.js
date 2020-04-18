import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  grupo: {
    descricao: "Descricao",
    cat_inicio: "A00",
    cat_fim: "A00",
  },
  show: false
}

const modalSlice = createSlice({
  name: "modalGroup",
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.grupo.descricao = payload.descricao
      state.grupo.cat_inicio = payload.cat_inicio
      state.grupo.cat_fim = payload.cat_fim
      state.show = true
    },
    closeModal: state => {
      state.show = false
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export const modalSelector = state => state.modalGroup

export default modalSlice.reducer;
