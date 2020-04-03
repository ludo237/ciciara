export const otherRooms = state => state.rooms.filter(room => room.id != state.room.id);
export const roomMessages = state => state.rooms.messages;
