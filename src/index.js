const client = require("./nodetest");
const user = require("./jasmin/user.js");

function createjasmin(jasmincmd) {
  for (const key in jasmincmd) {
    const element = jasmincmd[key];
    element.value == null
      ? client.write(`${element.key}\r\n`)
      : client.write(`${element.key} ${element.value}\r\n`);
  }
  return "completed";
}

// client.on("ready", function () {
let value1 = createjasmin(
  user({ username: "test", password: "pwd", gid: "foogroup", uid: "test" })
);
//  Failling Call
// createjasmin(
//   user({ username: "test", password: "pwd", gid: "sfoogroup", uid: "test" })
// );

// });
//  Succssful Call

//  Failling Call
// createjasmin(
//   user({ username: "test", password: "pwd", gid: "sfoogroup", uid: "test" })
// );

// console.log(connection);
