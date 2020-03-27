export const isCiciaraOnline = state => state.server.online;
export const otherRooms = state => state.rooms.filter(room => room.name != state.selectedRoom.name);
export const roomMessages = state => state.selectedRoom.messages;
