import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import titleBack from '@/game/assets/titleBack.png'
import titleLogo from '@/game/assets/titleLogo.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import clapMp3 from '@/game/assets/clap.mp3'
import clapOgg from '@/game/assets/clap.ogg'
import TitleScene from '@/game/scenes/TitleScene'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.image('titleBack', titleBack)
    this.load.image('titleLogo', titleLogo)
    this.load.audio('thud', [thudMp3, thudOgg])
    this.load.audio('clap', [clapMp3, clapOgg])
  }
   //title start
  create () {
    this.scene.start('TitleScene')
  }
}
