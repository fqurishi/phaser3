export default class MoveRightState 
{
    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /**
	 * @param {Phaser.Physics.Arcade.Sprite} player 
	 */
    constructor(player){
        this.player = player
    }

    enter(){
        this.player.anims.play('right', true)
        this.player.state = 'moving right'
    }
}