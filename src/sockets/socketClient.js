import { io } from "socket.io-client";

// TODO: 추후 서버 배포 시 주소 변경
const socket = io("http://localhost:3000");

export default socket;
