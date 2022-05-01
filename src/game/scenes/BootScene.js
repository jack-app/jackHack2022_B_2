import { Scene } from 'phaser';
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import titleBack from '@/game/assets/titleBack.png'
import missWav from '@/game/assets/miss.wav'
import happy_bg from '@/game/assets/happy_BG.jpg'
import TitleScene from '@/game/scenes/TitleScene'
import clapMp3 from '@/game/assets/clap.mp3'
import clapOgg from '@/game/assets/clap.ogg'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import key_b from '@/game/assets/key_b.png'
import fanfareMp3 from '@/game/assets/fanfare.mp3'
import correctWav from '@/game/assets/correct.wav'



export let mondai = [];
// [["1","アタフタ","atahuta","アタフタ.png"],
// ["2","あつあつ","atuatu","あつあつ.png"],
// ["3","あっさり","assari","あっさり.png"],
// ["4","いがいが","igaiga","いがいが.png"],
// ["5","いじいじ","iziizi","いじいじ.png"],
// ["6","いちゃいちゃ","ityaitya","いちゃいちゃ.png"],
// ["7","イライラ","iraira","イライラ.png"],
// ["8","うえーん","ue-n","うえーん.png"],
// ["9","ウキー","uki-","ウキー.png"],
// ["10","ウキウキ","ukiuki","ウキウキ.png"],
// ["11","うじゃうじゃ","uzyauzya","うじゃうじゃ.png"],
// ["12","うっかり","ukkari","うっかり.png"],
// // ["13","うとうと","utouto","うとうと.png"],
// ["14","うるうる","uruuru","うるうる.png"],
// ["15","うろうろ","urouro","うろうろ.png"],
// ["16","えーん","e-n","えーん.png"],
// ["17","オギャーオギャー","ogya-ogya-","オギャーオギャー.png"],
// ["18","おどおど","odoodo","おどおど.png"],
// ["19","カーカー","ka-ka-","カーカー.png"],
// ["20","ガーガー","ga-ga-","ガーガー.png"],
// ["21","ガオー","gao-","ガオー.png"],
// ["22","カシャ","kasya","カシャ.png"],
// ["23","カタカタ","katakata","カタカタ.png"],
// ["24","ガタガタ","gatagata","ガタガタ.png"],
// ["25","ガツガツ","gatugatu","ガツガツ.png"],
// // ["26","ガッカリ","gakkari","ガッカリ.png"],
// ["27","ガミガミ","gamigami","ガミガミ.png"],
// ["28","ガヤガヤ","gayagaya","ガヤガヤ.png"],
// ["29","カラカラ","karakara","カラカラ.png"],
// ["30","ガラガラ","garagara","ガラガラ.png"],
// ["31","カリカリ","karikari","カリカリ.png"],
// ["32","ガリガリ","garigari","ガリガリ.png"],
// ["33","カンカン","kankan","カンカン.png"],
// ["34","ガンガン","gangan","ガンガン.png"],
// ["35","キーキー","ki-ki-","キーキー.png"],
// ["36","ギコギコ","gikogiko","ギコギコ.png"],
// ["37","ギザギザ","gizagiza","ギザギザ.png"],
// ["38","ギスギス","gisugisu","ギスギス.png"],
// ["39","キツキツ","kitukitu","キツキツ.png"],
// ["40","ぎっしり","gissiri","ぎっしり.png"],
// ["41","ぎとぎと","gitogito","ぎとぎと.png"],
// ["42","ギュウギュウ","gyuugyuu","ギュウギュウ.png"],
// // ["43","きょろきょろ","kyorokyoro","きょろきょろ.png"],
// // ["44","ぎょろぎょろ","gyorogyoro","ぎょろぎょろ.png"],
// ["45","キラキラ","kirakira","キラキラ.png"],
// ["46","キリキリ","kirikiri","キリキリ.png"],
// // ["47","ギリギリ","girigiri","ギリギリ.png"],
// ["48","キンキン","kinkin","キンキン.png"],
// ["49","キンコンカンコン","kinkonkankon","キンコンカンコン.png"],
// ["50","ぐいぐい","guigui","ぐいぐい.png"],
// ["51","グウグウ","guuguu","グウグウ.png"],
// ["52","グキッ","gukiltu","グキッ.png"],
// ["53","くすくす","kusukusu","くすくす.png"],
// ["54","クタクタ","kutakuta","クタクタ.png"],
// ["55","くちゃくちゃ","kutyakutya","くちゃくちゃ.png"],
// ["56","ぐちゃぐちゃ","gutyagutya","ぐちゃぐちゃ.png"],
// ["57","グツグツ","gutugutu","グツグツ.png"],
// ["58","ぐっすり","gussuri","ぐっすり.png"],
// ["59","ぐったり","guttari","ぐったり.png"],
// ["60","くどくど","kudokudo","くどくど.png"],
// ["61","くねくね","kunekune","くねくね.png"],
// ["62","グビグビ","gubigubi","グビグビ.png"],
// ["63","クラクラ","kurakura","クラクラ.png"],
// ["64","グラグラ","guragura","グラグラ.png"],
// ["65","くるくる","kurukuru","くるくる.png"],
// ["66","ぐるぐる","guruguru","ぐるぐる.png"],
// ["67","グワッグワッ","guwagguwaltu","グワッグワッ.png"],
// ["68","クンクン","kunnkunn","クンクン.png"],
// ["69","グングン","gunngunn","グングン.png"],
// ["70","ゲッソリ","gessori","ゲッソリ.png"],
// ["71","ゲラゲラ","geragara","ゲラゲラ.png"],
// ["72","ケロケロ","kerokero","ケロケロ.png"],
// ["73","ゲロゲロ","gerogero","ゲロゲロ.png"],
// ["74","ゴクゴク","gokugoku","ゴクゴク.png"],
// ["75","コケコッコー","kokekkokko-","コケコッコー.png"],
// ["76","ゴシゴシ","gosigosi","ゴシゴシ.png"],
// ["77","こそこそ","kosokoso","こそこそ.png"],
// ["78","ごちゃごちゃ","gotyagotya","ごちゃごちゃ.png"],
// ["79","コツコツ","kotukotu","コツコツ.png"],
// ["80","ごつごつ","gotugotu","ごつごつ.png"],
// ["81","ごっそり","gossori","ごっそり.png"],
// ["82","こってり","kotteri","こってり.png"],
// ["83","ごつん","gotun","ごつん.png"],
// ["84","コトコト","kotokoto","コトコト.png"],
// ["85","こなごな","konagona","こなごな.png"],
// ["86","ゴホゴホ","gobogobo","ゴホゴホ.png"],
// ["87","コロコロ","korokoro","コロコロ.png"],
// ["88","ゴロゴロ","gorogoro","ゴロゴロ.png"],
// ["89","コンコン","konkon","コンコン.png"],
// ["90","ザーザー","za-za-","ザーザー.png"],
// ["91","さっぱり","sappari","さっぱり.png"],
// ["92","サラサラ","sarasara","サラサラ.png"],
// ["93","ザラザラ","zarazara","ザラザラ.png"],
// ["94","シトシト","sitosito","シトシト.png"],
// ["95","じめじめ","zimezime","じめじめ.png"],
// ["96","シャカシャカ","syakasyaka","シャカシャカ.png"],
// ["97","シャキシャキ","syakisyaki","シャキシャキ.png"],
// ["98","じゃぶじゃぶ","zyabuzyabu","じゃぶじゃぶ.png"],
// ["99","シュー","syu-","シュー.png"]
// ];
export let keyList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'hyphen', 'hat', 'doller', 
'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'at', 'Lkakko', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicoron', 'coron', 'Rkakko', 'shift', 
'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash', 'under', 'enter']
export default class BootScene extends Scene {

    preload() {
        getFile().then(()=>{
        // ロードするやつ
        this.whiteKeyImages = {};
        this.orangeKeyImages = {};
        mondai.forEach(e=>console.log('momo',e))
        console.log(mondai)
        console.log(mondai[0].length)            
            for (var i = 0; i < mondai.length; i++) {
                // console.log('@/game/assets/keyboard/key_orange/key_' + keyList[i] + '.png')
                  var q_txt_img_path = require('@/game/assets/question_txt/' + mondai[i][2] + '.png')
                  //this.q_txt_img_paths[keyList[i]] = 
                  console.log(String('q_img_' + mondai[i][2]))
                  this.load.image(String('q_img_' + mondai[i][2]), [q_txt_img_path])
              }
        })

        
       this.load.image('sky', sky)
        this.load.image('bomb', bomb)
        this.load.image('happy_bg', happy_bg)
        // 音声
      this.load.image('titleBack',titleBack)
    this.load.audio('miss', missWav)
    this.load.audio('fanfare',fanfareMp3)
    this.load.audio('correct',correctWav)
        this.load.audio('thud', [thudMp3, thudOgg])
        this.load.audio('miss', missWav)

    }

    create() {
        this.scene.start('PlayScene')
    }

}

function  getFile() {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open("get", "/questions.csv", true);
        req.onload = function() {
            convertTSVtoArray(req.responseText);
            resolve();
        };
        req.send(null); // HTTPリクエストの発行
    })
}
  
  // 各行をタブで区切った配列を生成する
  function convertTSVtoArray(str) {
    let tmp = str.split("\n");
  
    for (let i = 0; i < tmp.length; ++i) {
        mondai.push(String(tmp[i]).split(","));
    }
  }