function createFilter(profile) {
  let jasmincmd = [{ key: "persist -p", value: params.profile }];
  return jasmincmd;
}
module.exports = createFilter;
