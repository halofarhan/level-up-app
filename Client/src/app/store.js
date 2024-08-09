import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from '../features/profile/profile-slicer';

export default configureStore({
    reducer: {
        profiles: profilesReducer,
    },
});