import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands.map(band => {return {...band}}), {name:action.name,id:uuid()}] }

    case 'DELETE_BAND':
      let stateCpy = {...state, bands: [...state.bands.map(band => {return {...band}})]};
      return {...stateCpy, bands: [...stateCpy.bands.filter(band => band.id !== action.id)]}
    default:
      return state;
  }
};
