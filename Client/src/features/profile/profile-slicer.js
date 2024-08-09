
import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    profiles: [],
    loading: false,
    error: ""
};

export const profileSlice = createSlice({

    name: "profiles",
    initialState,
    reducers: {
        fetchPending(state) {
            state.loading = true;
            state.profiles = []
            state.error = ""
        },
        fetchSuccess(state, action) {
            state.loading = false
            state.profiles = action.payload
            state.error = ""
        },
        fetchReject(state, action) {
            state.loading = false
            state.profiles = []
            state.error = action.payload
        },
    }
})


export const { fetchPending, fetchSuccess, fetchReject } = profileSlice.actions;


export const fetchAsync = () => async (dispatch) => {
    try {
        dispatch(fetchPending())

        const { data } = await axios.get("http://localhost:3030/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
            },
        });

        dispatch(fetchSuccess(data))
    } catch (error) {
        dispatch(fetchReject(error.message))
    }
}

export default profileSlice.reducer;
