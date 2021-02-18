const INITIAL_STATE = [
  {
    name: 'Audi',
    url:
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Audi',
    url:
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Audi',
    url:
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_CAR') {
    return [...state, action.car];
  }
  return state;
}
export const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    car,
  };
};
