const qs = require('querystring');

module.exports = function (source, map) {
  const params = qs.parse(this.resourceQuery);

  this.callback(
    null,
    `export default function (Component) {
      if(!Component.__code) Component.__code = {};
      Component.__code['${params.name}'] = ${JSON.stringify(source.trim())};
      return Component
    }`,
    map,
  );
};
