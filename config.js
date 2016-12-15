// mosca configuration
// -------------------
// Details available [here](https://github.com/mcollina/mosca/wiki/Mosca-advanced-usage)

exports.store = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'mqttstore',
  mongo: {}
};

exports.db_config = {
  host : 'localhost'
};


exports.settings = {
  port: 1883
  /*, backend: store // remove backend and an in-memory store is used */
};

// setup variables that should be available for the different accounts
// ------------------------------------------------------------------

exports.jonas = {
  console: console,
  myvar: 'ZZ'
}
