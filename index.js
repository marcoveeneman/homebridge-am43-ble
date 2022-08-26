const AM43Platform = require("./lib/AM43Platform.js")

module.exports = function (api) {
    api.registerPlatform('homebridge-am43-ble', 'am43-ble', AM43Platform)
}
