const socket = io("/");

socket.io("connect", () => {
  console.log("successfully connected to socket.io server");
  console.log(socket.id);
});
