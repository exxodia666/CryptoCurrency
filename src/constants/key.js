export const key = '4768f7b6aeeac511bce1b24a8362e2c08214307f3b7ccb7146be6237ed33f5b1';

export const coins_url = (currency) => `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=${key}`;
export const daily_coins_url = (currency, crypto_currency) => `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${crypto_currency}&tsym=${currency}&limit=6&api_key=${key}`;

