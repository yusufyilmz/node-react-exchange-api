var config = require('../../config/config.json');

module.exports.testConfig =  {
    productId: 'BTC-BAT',
    productUrl: `/products`,
    wrongProductUrl: `/products/12`,
    productPriceUrl: `/products/BTC-BAT/prices`,
    wrongProductPriceUrl: `/products/1/prices`,
    exchangeTypes : config.EXCHANGETYPES.split(',').map(item => item.trim())
  }