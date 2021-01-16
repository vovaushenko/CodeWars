const roomMates = (rooms, floor) => rooms.slice(6 * (floor - 1), floor * 6).filter((a) => a);
