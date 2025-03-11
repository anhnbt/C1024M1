import { ADD_TODO, TOGGLE_TODO } from '../constants/todoConstants';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: new Date(), text: action.payload, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    // TODO: Remove

    default:
      return state;
  }
}
