import {Scene} from 'phaser'
import BootScene from '@/game/scenes/BootScene'
import PlayScene from '@/game/scenes/PlayScene'

export default class TitleScene extends Phaser.Scene {

  constructor() {
    super({ key: 'TitleScene'})
  }

  create() {

    // ===== ゲームオブジェクト =====

    // Text
    this.pushSpaceText = this.add.text(50, 50, 'スペースキーでスタート').setOrigin(0.5).setFontSize(32).setFontFamily('monospace, serif').setColor('Black');
    // ===== 開始 =====
    // this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // speak(' ');
    // ===== イベント処理 =====

      this.scene.start('PlayScene')


  }

  // update () {
  //   this.fontSize += this.addFontSize;
  //   if(this.fontSize < 32 || 36 < this.fontSize ) this.addFontSize *= -1;
  //   this.pushSpaceText.setFontSize(this.fontSize);



   
  // }
}