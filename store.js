import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice'; // Adjust the path to where your authSlice.js is located
import hospitalInfoReducer from './src/features/hospitalinfoSlice'
import heditReducer from './src/features/heditSlice';
import ratingReducer from "./src/features/ratingslice";
import hospitalReducer from "./src/features/hospitalSlice";
import donorReducer from "./src/features/DonorSlice";
import viewHospitalReducer from './src/features/viewhopitalSlice';
import giveratingReducer from './src/features/giveratingSlice';
import passwordReducer from "./src/features/resetpasswordSlice";
import fetchRequestsReducer from './src/features/fetchRequestsSlice';
import manageBloodBankReducer from './src/features/manageBloodBankSlice';
import bloodInventoryReducer from './src/features/bloodInventorySlice';
import donationHistoryReducer from './src/features/Donations';
//above are the reducers of 

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer here
    hospitalInfo: hospitalInfoReducer,
    hedit: heditReducer,
    ratings: ratingReducer,
    hospital: hospitalReducer,
    donor: donorReducer,
    giverating: giveratingReducer,
    viewhospital: viewHospitalReducer,
    password: passwordReducer,
    requests: fetchRequestsReducer,
    manageBloodBank: manageBloodBankReducer,
    bloodInventory: bloodInventoryReducer,
    donationHistory: donationHistoryReducer,

      
  },
});

export default store;
