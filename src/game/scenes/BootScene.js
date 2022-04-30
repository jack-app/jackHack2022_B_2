import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import titleBack from '@/game/assets/titleBack.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import clapMp3 from '@/game/assets/clap.mp3'
import clapOgg from '@/game/assets/clap.ogg'
import TitleScene from '@/game/scenes/TitleScene'

export let mondai = [];
export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.image('titleBack', titleBack)
    this.load.audio('thud', [thudMp3, thudOgg])


    getFile();
  }
   //title start
  create () {
    this.scene.start('TitleScene')
  }

}
function getFile() {
  let req = new XMLHttpRequest();
  req.open("get", "/questions.tsv", true);
  req.send(null); // HTTPリクエストの発行

  req.onload = function () {
    convertTSVtoArray(req.responseText);
  };
}

// 各行をタブで区切った配列を生成する
function convertTSVtoArray(str) {
  let tmp = str.split("\n");

  for (let i = 0; i < tmp.length; ++i) {
    mondai[i] = String(tmp[i]).split(",");
    console.log(tmp[i])
  }
}
