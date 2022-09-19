export function jasminsmppccm(params) {
  let smppccmcmd = [
    { key: "smppccm", value: params.a },
    { key: "cid", value: params.DEMO_CONNECTOR },
    { key: "host", value: params.ip },
    { key: "port", value: params.port },
    { key: "username", value: params.username },
    { key: "port", value: params.port },
    { key: "password", value: params.password },
    { key: "submit_throughput", value: params.submitThroughput },
    { key: "ok" },
  ];
  return smppccmcmd;
}
module.exports = jasminsmppccm;
