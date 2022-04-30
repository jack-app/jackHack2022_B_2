import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import missWav from '@/game/assets/miss.wav'
import happy_bg from '@/game/assets/happy_BG.jpg'

export let mondai = [];
export let keyList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'hyphen', 'hat', 'doller', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'at', 'Lkakko', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicoron', 'coron', 'Rkakko', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash', 'under', 'enter']
export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    // ロードするやつ
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.image('happy_bg', happy_bg)
    this.whiteKeyImages={};
    this.orangeKeyImages={}
    // for(var i=0; i < keyList.length; i++){
    //   // this.orangeKeyImages[keyList[i]] = this.load.image(String('key_' + keyList[i]), ['./assets/keyboard/key_orange/key_'+keyList[i]+'.png'])
    //   // this.whiteKeyImages[keyList[i]] = this.load.image(String('key_' + keyList[i]), ['./assets/keyboard/key_white/key_'+keyList[i]+'.png'])
      
    // }
    this.load.image({key: 'key_b', texture:  ['@/game/assets/key_b.png']});
    // 音声
    this.load.audio('thud', [thudMp3, thudOgg])
    this.load.audio('miss', missWav)
    getFile();
  }

  create () {
    this.scene.start('PlayScene')
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
