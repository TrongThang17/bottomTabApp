import initScreen from '../data/data';
import * as f from '../action/action';

const reducerChangeTab = (state = initScreen, {type, payload}: any) => {
  switch (type) {
    case f.SELECT_SCREEN:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default reducerChangeTab;
