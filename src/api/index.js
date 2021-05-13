import request from "../utils/request";

export function getWordCloud() {
  return request({
    url: "/screen/wordcloud",
    method: "get"
  });
}

export function getScreenData() {
  return request({
    url: "/screen/data",
    method: "get"
  });
}

export function getScreenMap() {
  return request({
    url: "/screen/map/scatter",
    method: "get"
  });
}
