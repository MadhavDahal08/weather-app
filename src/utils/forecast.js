const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const message = `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. There is a ${body.currently.precipProbability}% chance of rain. The heighest and lowest temperature of the day is ${body.daily.data[0].temperatureHigh} and ${body.daily.data[0].temperatureLow} `;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
