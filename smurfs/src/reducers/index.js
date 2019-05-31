/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, SUCCESS, FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCHING CASES
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case FAILURE:
      return {
        ...state,
        fetching: false
      }
      
      // ADD SMURF CASES
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false
      }
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
