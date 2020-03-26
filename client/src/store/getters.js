export const isCiciaraOnline = state => state.server.online;
export const otherRooms = state => state.rooms.filter(room => room.id != state.selectedRoom.id);
