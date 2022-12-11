export default class ClimbUpState 
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
        this.player.anims.play('ladder',true)
        this.player.state = 'climbing'
    }
}