const net = require("net");
const client = new net.Socket({
  readable: true,
  writable: true,
});
client.connect(8990, "127.0.0.1", function () {
  console.log("Connected");

  // client.write("jcliadmin\r\n");
  // client.write("jclipwd\r\n");
});

client.on("data", function (data) {
  console.log("Received: " + data);
  let text = data.toString();
  // console.log(text);
  const regex = /You must set User id/;
  text.replace;
  let found = text.search(regex);

  if (found > 0) {
    // console.log("Error Not fulling Jasmin requirement to create");
    client.write("ko\r\n");
    // client.write("quit\r\n");
    found = 0;
  }
});

client.on("close", function () {
  console.log("Connection closed");
  client.end();
});

module.exports = client;
