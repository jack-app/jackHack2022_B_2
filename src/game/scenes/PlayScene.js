
import { Scene } from "phaser";
import { keyList } from "@/game/scenes/BootScene";
import { mondai } from '@/game/scenes/BootScene'


export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });

  }


  create() {
    console.log(mondai)
    this.gameStatus = "starting";
    this.inputIndex = 0;
    this.score = 0;
    this.lastKey = "";
    this.waitingKey = "";
    this.questionImagePath = "bomb";
    this.questionImagePosition = [300,400];
    this.questionSentence = mondai[0][0];
    this.questions = mondai;
    this.restTime = 100;
    this.inputKeys = "";
    this.keyImages = { orange: [], white: [] };

    // ==== 背景画像 ====
    this.BGImage = this.add.image(400,300, "happy_bg");

    // ==== キーボード文字 ====
    // for(var i=0;i < keyList.length; i++){
    //   this.keyImages = this.add.image(100, (20 + i*30), String('key_' + keyList[i]))
    // }
    // ==== 文字 ====
    this.add
      .text(600, 27, "スコア")
      .setFontSize(32)
      .setFontFamily("monospace, serif")
      .setOrigin(0);
    this.scoreText = this.add
      .text(730, 27, String(this.score))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    this.add
      .text(30,27, "残り　　　　　　　秒")
      .setFontSize(32)
      .setFontFamily("monospace, serif")
      .setOrigin(0);
      this.timerText = this.add
      .text(150, 27, String(this.restTime))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    // this.keyText = this.add
    //   .text(200, 100, String(this.lastKey))
    //   .setOrigin(1, 0)
    //   .setFontSize(32)
    //   .setFontFamily("monospace, serif");
    this.questionText = this.add
      .text(400, 450, String(this.questionSentence))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    this.inputText = this.add
      .text(300, 300, String(this.questionSentence))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    
    this.questionImage = this.add.image(this.questionImagePosition, this.questionImagePath);
    

    // for(var i=0;i < keyList.length; i++){
    //   let x = this.put_key(i)[0];
    //   let y = this.put_key(i)[1];
    //   this.keyImages["white"][i] = this.add.image(x,y,"white_key_"+keyList[i]);
    // }

    this.sfx_fanfare = this.sound.add("fanfare");
    this.sfx_correct = this.sound.add("correct");
    this.sfx_clap = this.sound.add("clap");
    this.sfx_thud = this.sound.add("thud");
    this.sfx_click = this.sound.add("click");
    this.sfx_miss = this.sound.add("miss");

    
    this.physics.world.on("worldbounds", () => {
      this.sound.play("thud", { volume: 0.75 });
    });

    this.input.keyboard.on("keydown", (event) => {
      this.typing(event);
    });

    // タイマー
    const timer = this.time.addEvent({
      delay: 1000,
      loop: true,
    });

    // タイマーのコールバック
    timer.callback = () => {
      if (this.gameStatus == "playing") {
        this.restTime--;
        this.timerText.text = String(this.restTime);

        if (this.restTime <= 0) {
          this.gameStatus = "timeover";
          let lastScore = this.score;
        }
      } else if (this.gameStatus == "timeover") {
        // タイムオーバーになった次のコールバックでタイトルに戻る
        timer.remove();
        this.scene.start("Title");
      }
    };

    // ===== 開始 =====
    this.gameStatus = "playing";
    this.question();
  }

  update() {}
  put_key(index){// キーボードの画像の一個一個のボタンの一を返す関数
    let counter = 0;
    let x_one = 65;
    let x_zurasu = 5;
    let y_one = 80;
    let x_base = 10;
    let y_base = 200;
    if(index>=0 && index <14){
      return [x_base + x_zurasu * 0 + (index - counter) * x_one, y_base + y_one*0]
    }else if(index < 25){
      counter = 13;
      return [x_base + x_zurasu * 1 + (index - counter) * x_one, y_base + y_one*1]
    }else if(index < 38 ){
      counter = 26;
      return [x_base + x_zurasu * 2 + (index - counter) * x_one, y_base + y_one*2]
    }else{
      counter = 40
      return [x_base + x_zurasu * 3 + (index - counter) * x_one, y_base + y_one*3]
    }
  }
  typing(event) {
    console.log(event.key.toLowerCase());
    if (this.gameStatus != "playing") return;
    this.sfx_click.play();
    this.lastKey = event.key.toLowerCase();
    if (this.waitingKey == event.key.toLowerCase()) {
      this.inputIndex++;
      this.score++;
      this.scoreText.text = String(this.score);

      if (this.inputIndex > this.questionSentence.length - 1) {
        // 次の問題に移る
        this.inputText.text = "";
        this.sfx_correct.play();
        this.question();
      } else {
        this.sfx_click.play();
        // 次の文字に移る
        this.inputText.text += String(this.lastKey);
        this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();
      }
    }else{
      this.sfx_miss.play()
    }
  }


  question() {
    this.questionImage.visible = false;
    this.questionIndex = Math.floor(Math.random() * this.questions.length);
    this.questionSentence = this.questions[this.questionIndex][2];
    this.questionImagePath = 'q_img_'  + this.questions[this.questionIndex][2];
    console.log("quin", this.questionImagePath);
    this.questionImage = this.add.image(400,300, this.questionImagePath);

    this.inputIndex = 0; // 入力の文字数を0にリセット
    this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();

    this.questionText.text = this.questionSentence;
  }
}
