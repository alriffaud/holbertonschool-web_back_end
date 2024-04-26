// This module implement a function named initializeRooms.
// It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return rooms;
}
