export default class TitleScene extends Phaser.Scene {
  sfx_gong1 = null;
  fontSize = 32;
  addFontSize = 0.2;

  constructor() {
    super({ key: "TitleScene" });
  }
  preload(){

}
  create() {
    // ===== ゲームオブジェクト =====
    // Sound
    if (this.sfx_gong1 == null) this.sfx_gong1 = this.sound.add("clap", { volume: 0.1 });

    // Image
    this.titleBackGroundImage = this.add.sprite(400, 320, "titleBack");
    this.titleBackGroundImage.displayWidth = 1200;
    this.titleBackGroundImage.scaleY = this.titleBackGroundImage.scaleX;

    // Text
    this.notionText = this.add.text(380, 200, "！注意！ここから先は、音声が流れます").setOrigin(0.5).setFontSize(32).setColor("Yellow");
    this.pushSpaceText = this.add.text(380, 380, "スペースキーでゲーム開始").setOrigin(0.5).setFontSize(32).setFontFamily("monospace, serif").setColor("Yellow");
    // ===== 開始 =====
    // ===== イベント処理 =====
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    this.fontSize += this.addFontSize;
    if (this.fontSize < 32 || 36 < this.fontSize) this.addFontSize *= -1;
    this.pushSpaceText.setFontSize(this.fontSize);

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.sfx_gong1.play();
      this.scene.start("PlayScene");
    }
  }

  
}
