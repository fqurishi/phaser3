export default class MoveLeftState 
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
        this.player.anims.play('left', true)
    }
}