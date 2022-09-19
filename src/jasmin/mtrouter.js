function defaultMTRouter(params) {
  let createGroup = [
    { key: "mtrouter -a" },
    { key: "type defaultroute" },
    { Key: "connector", value: params.connector },
    { Key: "rate", value: params.rate },
    { key: "ok" },
  ];
  return createGroup;
}
module.exports = defaultMTRouter;

// jcli : mtrouter -a
// Adding a new MT Route: (ok: save, ko: exit)
// > type defaultroute
// jasmin.routing.Routes.DefaultRoute arguments:
// connector
// > connector smppc(DEMO_CONNECTOR)
// > rate 0.00
// > ok
// Successfully added MTRoute [DefaultRoute] with order:0
