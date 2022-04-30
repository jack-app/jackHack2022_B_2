import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'
import PlayScene from '@/game/scenes/PlayScene'
import TitleScene from '@/game/scenes/TitleScene'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [BootScene, TitleScene, PlayScene]
  })
}

export default launch
export { launch }
