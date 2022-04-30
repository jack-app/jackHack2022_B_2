import { Scene } from 'phaser'
// import { questions } from '@/game/scenes/'
export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    this.gameStatus = "playing";
    this.inputIndex = 0;
    this.score = 0;
    this.lastKey = "";
    this.waitingKey = "";

    // === Text
    // スコア、タイマー
    this.add.text(600, 27, 'スコア').setFontSize(32).setFontFamily('monospace, serif').setOrigin(0);
    this.scoreText = this.add.text(730, 27, String(this.score)).setOrigin(1,0).setFontSize(32).setFontFamily('monospace, serif');
    this.timerText = this.add.text(200, 27, String(this.restTime)).setOrigin(1,0).setFontSize(32).setFontFamily('monospace, serif');
    this.keyText = this.add.text(200,100, String(this.lastKey)).setOrigin(1,0).setFontSize(32).setFontFamily('monospace, serif');
    // this.add.image(400, 300, 'sky') // 最後に

    // const bomb = this.physics.add.image(400, 200, 'bomb')
    // bomb.setCollideWorldBounds(true)
    // bomb.body.onWorldBounds = true // enable worldbounds collision event
    // bomb.setBounce(1)
    // bomb.setVelocity(200, 20);

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 })
    })

    this.input.keyboard.on("keydown", (event) => {
      this.typing(event);
    });
  }

  update () {
  }
  typing(event) {
    console.log(event.key.toLowerCase());
    if(this.gameStatus != 'playing') return;
    this.lastKey = event.key.toLowerCase();
    this.keyText.text = String(this.lastKey);
    if(this.waitingKey == event.key.toLowerCase()){
      this.inputIndex++;
      this.score++;
      this.scoreText.text = String(this.score);

      if(this.inputIndex > this.questionSentence.length - 1) {
        // 次の問題に移る
        this.sfx_success.play();
        this.question();
      } else {
        this.sfx_typing.play();
        // 次の文字に移る
        this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();
      }
    }
  }

  question(){
    this.questionIndex = Math.floor( Math.random() * this.questions.length );
    this.questionSentence = this.questions[this.questionIndex][0];
    this.japaneseSentence = this.questions[this.questionIndex][1];

    this.inputIndex = 0;
    this.waitingKey = this.questionSentence[this.inputIndex].toLowerCase();

    this.questionText.text = this.questionSentence;
    this.cursorText.text = getCursorString(this.questionSentence.length, this.inputIndex);
    this.japaneseText.text = this.japaneseSentence;
    speak(this.questionSentence);
  }
}
