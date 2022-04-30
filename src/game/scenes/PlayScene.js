import { Scene } from "phaser";
import { mondai } from "@/game/scenes/BootScene";
export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
  }

  create() {
    this.gameStatus = "starting";
    this.inputIndex = 0;
    this.score = 0;
    this.lastKey = "";
    this.waitingKey = "s";
    this.questionImagePath = "bomb";
    this.questionSentence = mondai[0][0];
    this.questions = mondai;
    this.restTime = 100;

    // === Text
    // スコア、タイマー
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
    this.timerText = this.add
      .text(200, 27, String(this.restTime))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    this.keyText = this.add
      .text(200, 100, String(this.lastKey))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    this.questionText = this.add
      .text(300, 200, String(this.questionSentence))
      .setOrigin(1, 0)
      .setFontSize(32)
      .setFontFamily("monospace, serif");
    this.questionImage = this.add.image(400, 300, "bomb");
    // this.add.image(400, 300, 'sky') // 最後に

    // const bomb = this.physics.add.image(400, 200, 'bomb')
    // bomb.setCollideWorldBounds(true)
    // bomb.body.onWorldBounds = true // enable worldbounds collision event
    // bomb.setBounce(1)
    // bomb.setVelocity(200, 20);

    this.sound.add("thud");
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
          lastScore = this.score;
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
    // console.log(mondai);
  }

  update() {}
  typing(event) {
    console.log(event.key.toLowerCase());
    if (this.gameStatus != "playing") return;
    this.lastKey = event.key.toLowerCase();
    this.keyText.text = String(this.lastKey);
    if (this.waitingKey == event.key.toLowerCase()) {
      this.inputIndex++;
      this.score++;
      this.scoreText.text = String(this.score);

      if (this.inputIndex > this.questionSentence.length - 1) {
        // 次の問題に移る
        // this.sfx_success.play();
        this.question();
      } else {
        // this.sfx_typing.play();
        // 次の文字に移る
        this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();
      }
    }
  }

  question() {
    this.questionIndex = Math.floor(Math.random() * this.questions.length);
    this.questionSentence = this.questions[this.questionIndex][1];
    this.imagePath = this.questions[this.questionIndex][2];
    console.log("quin", this.questionSentence);
    // this.questionImage.name = "sky";
    this.inputIndex = 0; // 入力の文字数を0にリセット
    this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();

    this.questionText.text = this.questionSentence;
  }
}
