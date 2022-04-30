export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: "Loading",
    });
  }
  preLoad() {
    // 問題データを読み込む
    getFile();
  }
}

function getFile() {
  let req = new XMLHttpRequest();
  req.open("get", "/assets/data/questions.tsv", true);
  req.send(null); // HTTPリクエストの発行

  req.onload = function () {
    convertTSVtoArray(req.responseText);
  };
}

// 各行をタブで区切った配列を生成する
function convertTSVtoArray(str) {
  let tmp = str.split("\n");

  for (let i = 0; i < tmp.length; ++i) {
    mondai[i] = tmp[i].split("\t");
  }
}
