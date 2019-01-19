const qs = require('querystring')

module.exports = function (source, map) {
  const params = qs.parse(this.resourceQuery);
  console.log(params)
  this.callback(
    null,
    `export default function (Component) {
      if(!Component.options.code) Component.options.code = {};
      Component.options.code['${params.name}'] = ${JSON.stringify(source.trim())};
    }`,
    map
  )
}