import { Scene } from "phaser";
import { mondai } from "./LoadingScene";
export default class SampleScene extends Scene {
  defaultRestTime = 30;
  constructor() {
    super({
      key: "SampleScene",
      physics: { arcade: { debug: true } },
    });
  }
  preload() {}
  create() {
    // ==== 初期設定 ====
    this.gameStatus = 'starting';
    this.restTime = this.defaultRestTime;
    this.score = 0;
    this.inputIndex = 0;
    thiis.questionsIndex = 0;
    this.waitingKey = "";
    this.questions = [["ふわふわ", "huwahuwa", "huwahuwa.jpg"]];

    this.add.text(370, 27, 'スコア').setFontSize(32).setFontFamily('monospace, serif').setOrigin(0);

    // ===== イベント処理 =====
    // キーが押されたとき
    this.input.keyboard.on("keydown", (event) => {
      this.typing(event);
    });
  }

  update() {}
  typing(event) {
    console.log(event.key);
    if (this.gameStatus != "playing") return;

    
    this.englishSentence;
    this.lastKey = event.key.toLowerCase();
    this.lastKeyText.text = this.lastKey;

    // Hitしたかチェック
    if (this.waitingKey == event.key.toLowerCase()) {
      // ヒットした
      this.inputIndex++;
      this.score++;
      this.scoreText.text = String(this.score);

      if (this.inputIndex > this.englishSentence.length - 1) {
        // 次の問題に移る
        this.sfx_success.play();
        this.question();
      } else {
        this.sfx_typing.play();
        // 次の文字に移る
        this.waitingKey = this.englishSentence[this.inputIndex].toLowerCase();
        this.cursorText.text = getCursorString(
          this.englishSentence.length,
          this.inputIndex
        );
      }
    } else {
      // ヒットしていない
      this.sfx_typeMiss.play();
    }
  }
}
