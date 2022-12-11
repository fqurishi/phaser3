import IdleState from '../states/IdleState'
import MoveLeftState from '../states/MoveLeftState'
import MoveRightState from '../states/MoveRightState'
import ClimbDownState from '../states/ClimbDownState'
import ClimbUpState from '../states/ClimbUpState'
import ShootGunState from '../states/ShootGunState'
import {gamefunctions} from '../functions/functions'
export default class PlayerController
{
	/** @type {{ [key: string]: { enter: () => void } }} */
	states

	private cursors: Phaser.Types.Input.Keyboard.CursorKeys

	private actionCallback?: () => void

	private _shouldSortChildren = true

	private keyW: Phaser.Input.Keyboard.Key
	private keyA: Phaser.Input.Keyboard.Key
	private keyS: Phaser.Input.Keyboard.Key
	private keyD: Phaser.Input.Keyboard.Key
	private keySpace: Phaser.Input.Keyboard.Key

	get shouldSortChildren()
	{
		return this._shouldSortChildren
	}

	/** @type {{ enter: () => void }} */
	currentState

	/**
	 * @param {Phaser.Physics.Arcade.Sprite} player 
	 */
	constructor(player, scene: Phaser.Scene, actionCallback?:() => void)
	{
		this.states = {
            idle: new IdleState(player),
            moveLeft: new MoveLeftState(player),
            moveRight: new MoveRightState(player),
            climbDown: new ClimbDownState(player),
            climbUp: new ClimbUpState(player),
			shootGun: new ShootGunState(player)
        }
		this.cursors = scene.input.keyboard.createCursorKeys()
		this.actionCallback = actionCallback
		this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

	}

	setChildrenSorted()
	{
		this._shouldSortChildren = false
	}

	/**
	 * 
	 * @param {string} name 
	 */
	setState(name)
	{
		if (this.currentState === this.states[name])
        {
		    return
	    }
        
        this.currentState = this.states[name]
        this.currentState.enter()
	}

	getState(player: Phaser.Physics.Arcade.Sprite)
	{
        return player.state
	}

	update(player: Phaser.Physics.Arcade.Sprite){
		//disgusting if else chain coming, not sure how to clean this up at the moment
		if (this.cursors?.left.isDown || this.keyA.isDown)
	    {
		    this.setState('moveLeft')
			if (player.frame.name == '15'){
				player.state = 'moving left'
			}
			else{
				player.state = 'standing left'
			}
            player.x -=1
	    }
        if (this.cursors?.right.isDown || this.keyD.isDown)
        {
            this.setState('moveRight')
			if (player.frame.name == '16'){
				player.state = 'moving right'
			}
			else{
				player.state = 'standing right'
			}
            player.x +=1
        }
        if ((this.cursors?.up.isDown || this.keyW.isDown) && (this.cursors?.right.isUp && this.keyD.isUp && this.cursors?.left.isUp && this.keyA.isUp))
        {
			if (gamefunctions.ladderUpCollision(player.x,player.y)){
            	this.setState('climbUp')
            	player.y -=2
			}else{
				player.state = 'not climbing'
				player.y -=1
				this.setState('idle')
			}
        }
        if ((this.cursors?.down.isDown || this.keyS.isDown) && (this.cursors?.right.isUp && this.keyD.isUp && this.cursors?.left.isUp && this.keyA.isUp))
        {
			if (gamefunctions.ladderDownCollision(player.x,player.y)){
            	this.setState('climbDown')
            	player.y +=2
			}else{
				player.state = 'not climbing'
				player.y +=1
				this.setState('idle')
			}
        }
		if(Phaser.Input.Keyboard.JustDown(this.keySpace)){
			if(player.state != 'climbing'){
			this.setState('shootGun')
			}
		}
        if (this.cursors?.left.isUp && this.keyA.isUp && this.cursors?.right.isUp && this.keyD.isUp
			&& this.cursors?.up.isUp && this.keyW.isUp && this.cursors?.down.isUp && this.keyS.isUp)
        {
           this.setState('idle')
        }
		if(player.state == 'climbing'){
            player.body.stop();
            (player.body as Phaser.Physics.Arcade.Body).allowGravity = false
        }
        else{
            (player.body as Phaser.Physics.Arcade.Body).allowGravity = true
        }

	}
}