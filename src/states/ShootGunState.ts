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
        // 9 is left, 10 is right, 11 is moving left, 12 is moving right
        switch (this.player.state){
            case 'standing right':
                this.player.setFrame(10)
                this.player.state = 'shooting right'
                break;
            case 'standing left':
                this.player.setFrame(9)
                this.player.state = 'shooting left'
                break;
            case 'moving left':
                this.player.setFrame(11)
                this.player.state = 'shooting left'
                break;
            case 'moving right':
                this.player.setFrame(12)
                this.player.state = 'shooting right'
                break;
            default:
                break;
        }
    }
}