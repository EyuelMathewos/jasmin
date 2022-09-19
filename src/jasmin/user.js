function user({ username, password, gid, uid }) {
  let createUser = [
    { key: "jcliadmin" },
    { key: "jclipwd" },
    { key: "user -a" },
    { key: "username", value: username },
    { key: "password", value: password },
    { key: "gid", value: gid },
    { key: "uid", value: uid },
    { key: "ok" },
  ];
  return createUser;
}

module.exports = user;
