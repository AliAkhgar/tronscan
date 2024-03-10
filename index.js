const TronGrid = require("trongrid");
const TronWeb = require("tronweb");

const TRON_SCAN_API_KEY = "XXX";

var tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
  eventServer: "https://api.trongrid.io",
  headers: { "TRON-PRO-API-KEY": TRON_SCAN_API_KEY },
});
tronWeb.setHeader({ "TRON-PRO-API-KEY": TRON_SCAN_API_KEY });
var tronGrid = new TronGrid(tronWeb);

export function init(TronScanAPIKey) {
  TRON_SCAN_API_KEY = TronScanAPIKey;
  tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io",
    eventServer: "https://api.trongrid.io",
    headers: { "TRON-PRO-API-KEY": TRON_SCAN_API_KEY },
  });
  tronWeb.setHeader({ "TRON-PRO-API-KEY": TRON_SCAN_API_KEY });
  tronGrid = new TronGrid(tronWeb);
}

export function getTranscations(
  options = { onlyTo: true, onlyConfirmed: false }
) {
  return new Promise(async (resolve, reject) => {
    tronGrid.account
      .getTransactions("TR8VXtfeUkLjF4cBfi94W8ty2sFvKprQDf", options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getEvents(txID) {
  return new Promise(async (resolve, reject) => {
    tronGrid.transaction
      .getEvents(txID)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
