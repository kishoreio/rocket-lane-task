import initialState from '../data/initialState';

//  filter function
const changeFilterData = (originalState, filter) => {
  const arr = [];
  originalState.forEach(user => {
    let isValidData = true;
    for (let i = 0; i < filter.availability.length; i++) {
      const category = filter.availability[i];
      if (!filter[category].includes(user[category])) {
        isValidData = false;
        break;
      }
    }
    if (isValidData) {
      arr.push(user);
    }
  });
  return arr;
};

//  reducer function
const reducer = (state, action) => {
  const copyState = [...state];
  switch (action.type) {
    case 'SORT_TABLE_BY_ASC':
      return copyState.sort((a, b) => {
        if (a[action.text] < b[action.text]) {
          return -1;
        } else if (a[action.text] > b[action.text]) {
          return 1;
        } else {
          return 0;
        }
      });
    case 'SORT_TABLE_BY_DESC':
      return copyState.sort((a, b) => {
        if (a[action.text] > b[action.text]) {
          return -1;
        } else if (a[action.text] < b[action.text]) {
          return 1;
        } else {
          return 0;
        }
      });
    case 'SORT_TABLE_BY_DEFAULT':
      return changeFilterData(initialState, action.filter);
    case 'TOGGLE_FILTER_ON':
      return changeFilterData(action.func, action.prop);
    default:
      return initialState;
  }
};

export default reducer;
