export function group(params) {
  let createGroup = [
    { key: "group -a" },
    { key: "gid", value: params.groupname },
    { key: "ok" },
  ];
  return createGroup;
}
module.exports = group;
