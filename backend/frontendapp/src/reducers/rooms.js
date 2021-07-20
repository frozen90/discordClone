import {
  SELECT_ROOM,
  ENTER_CHAT_ROOM
} from "../actions/types";

const initialState = {
  mainRooms: {
    roomName: '',
    roomId: 0,
  },
  chatRoom: {
    channelName:'',
    channelId: 0,
  }

};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case SELECT_ROOM:
      return {
        ...state,
        mainRooms: {
          ...state,
          roomName: action.data
        }
      }
    case ENTER_CHAT_ROOM:
      return {
        ...state,
        chatRoom:{
          ...state,
          channelName: action.data
        }
      }

    
    default:
      return state;
  }
}