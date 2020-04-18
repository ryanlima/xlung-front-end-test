import { createSlice } from "@reduxjs/toolkit";

import api from "../../../services/api";

export const initialState = {
  loading: false,
  hasErros: false,
  searchTerm: '',
  groups: [],
  filteredGroups: [],
};

const listGroupSlice = createSlice({
  name: "listGroup",
  initialState,
  reducers: {
    getGroups: (state) => {
      state.loading = true;
    },
    getGroupsSuccess: (state, { payload }) => {
      state.groups = payload;
      state.filteredGroups = payload
      state.loading = false;
      state.hasErros = false;
    },
    getGroupsFailure: (state) => {
      state.loading = false;
      state.hasErros = true;
    },
    getGroupsFiltered: (state, { payload }) => {
      state.filteredGroups = (payload.length !== 0) ? state.groups.filter(
        groups => groups.descricao
          .toLowerCase().indexOf(payload.toLowerCase()) > -1) : state.groups;
    }
  },
});

export const {
  getGroups,
  getGroupsSuccess,
  getGroupsFailure,
  getGroupsFiltered
} = listGroupSlice.actions;

export const groupsSelector = (state) => state.groups;

export default listGroupSlice.reducer;

export function fetchGroups() {
  return async (dispatch) => {
    dispatch(getGroups());

    try {
      const response = await api.get("/groups");
      dispatch(getGroupsSuccess(response.data.groups));
    } catch (error) {
      dispatch(getGroupsFailure());
    }
  };
}
