import { Scene } from "phaser";
import sky from "@/game/assets/sky.png";
import bomb from "@/game/assets/bomb.png";
import titleBack from "@/game/assets/titleBack.png";
import titleLogo from "@/game/assets/titleLogo.png";
import missWav from "@/game/assets/miss.wav";
import clickMp3 from "@/game/assets/click.mp3";
import happy_bg from "@/game/assets/happy_BG.jpg";
import TitleScene from "@/game/scenes/TitleScene";
import clapMp3 from "@/game/assets/clap.mp3";
import clapOgg from "@/game/assets/clap.ogg";
import thudMp3 from "@/game/assets/thud.mp3";
import thudOgg from "@/game/assets/thud.ogg";
import key_b from "@/game/assets/key_b.png";
import fanfareMp3 from "@/game/assets/fanfare.mp3";
import correctWav from "@/game/assets/correct.wav";

export let mondai = [];
export let keyList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "hyphen",
  "hat",
  "doller",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "at",
  "Lkakko",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "semicoron",
  "coron",
  "Rkakko",
  "shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "comma",
  "period",
  "slash",
  "under",
  "enter",
];
export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    getFile().then(() => {
      // ロードするやつ
      this.whiteKeyImages = {};
      this.orangeKeyImages = {};
      mondai.forEach((e) => console.log("momo", e));
      console.log(mondai);
      console.log(mondai[0].length);
      for (var i = 0; i < mondai.length; i++) {
        // console.log('@/game/assets/keyboard/key_orange/key_' + keyList[i] + '.png')
        var q_txt_img_path = require("@/game/assets/question_txt/" + mondai[i][2] + ".png");
        //this.q_txt_img_paths[keyList[i]] =
        console.log(String("q_img_" + mondai[i][2]));
        this.load.image(String("q_img_" + mondai[i][2]), [q_txt_img_path]);
      }
    });
    // 画像
    this.load.image("sky", sky);
    this.load.image("bomb", bomb);
    this.load.image("happy_bg", happy_bg);
    this.load.image("titleBack", titleBack);
    this.load.image("titleLogo", titleLogo);
    this.load.image("titleBack", titleBack);
    // 音声
    this.load.audio("miss", missWav);
    this.load.audio("fanfare", fanfareMp3);
    this.load.audio("correct", correctWav);
    this.load.audio("click", clickMp3);
    this.load.audio("thud", [thudMp3, thudOgg]);
    this.load.audio("clap", [clapMp3, clapOgg]);
  }

  //title start
  create() {
    this.scene.start("TitleScene");
  }
}

function getFile() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("get", "/questions.csv", true);
    req.onload = function () {
      convertTSVtoArray(req.responseText);
      resolve();
    };
    req.send(null); // HTTPリクエストの発行
  });
}

// 各行をタブで区切った配列を生成する
function convertTSVtoArray(str) {
  let tmp = str.split("\n");

  for (let i = 0; i < tmp.length; ++i) {
    mondai.push(String(tmp[i]).split(","));
  }
}
