import { configureStore} from '@reduxjs/toolkit';
  import adminReducer from './adminSlice';
 import studentReducer from './studentSlice';
 import authReducer from './auth/authSlice';
import classReducer from './classSlice'
import subjectReducer from './subjectSlice';
import teacherReducer from './teacherSlice';
import feesReducer from './feesSlice';
import expensesReducer from './expensesSlice';

const store = configureStore({
reducer:{
  
  admin:adminReducer,
  students:studentReducer,
  auth:authReducer,
  class:classReducer,
  subjects:subjectReducer,
  teachers:teacherReducer,
  fees:feesReducer,
  expenses: expensesReducer,

 }
}); 

export default store;