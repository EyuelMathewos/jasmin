export function defaultMTRouter(params) {
  let createGroup = [
    { key: "morouter -a" },
    { key: "type defaultroute" },
    { Key: "connector", value: params.connector },
    { key: "ok" },
  ];
  return createGroup;
}
module.exports = defaultMTRouter;
