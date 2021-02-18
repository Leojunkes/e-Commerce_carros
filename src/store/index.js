import { createStore } from 'redux';

const INITIAL_STATE=[
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
]

function reducer(state=INITIAL_STATE, action) {
  return state;
}

export default createStore(reducer);
