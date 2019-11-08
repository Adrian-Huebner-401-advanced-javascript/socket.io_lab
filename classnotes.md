# Socket.io

## New Library

- Web Sockets
  - A feature built on top of TCP
  - Facilitates a maintainble client <-> server relationship
  - Socket.io sometimes uses web socket, but is more or less just a representation of the relation that sockets try and produce
  - Socket.io is responsible for maintaining it's own connection, not simple socket connection
  - Allows us to emit messages to any connected clients
  - Benefits:
    - We can now cerate our own events
    - we can also set up namespaces
      - Similat to endpoints in http REST
      - We no longer have to deal with buffers
      - We can also have opt in "rooms"
