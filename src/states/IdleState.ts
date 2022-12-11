export default class IdleState 
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
        this.player?.anims.stop()
        this.player.setGravityY(0)
    }
}