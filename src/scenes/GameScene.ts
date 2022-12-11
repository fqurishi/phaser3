import Phaser from 'phaser'
import PlayerController from '~/controller/PlayerController'
import { gamefunctions } from '~/functions/functions'

export default class HelloWorldScene extends Phaser.Scene
{
    private player!: Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
    private platforms?: Phaser.Physics.Arcade.StaticGroup
	private playerController?: PlayerController
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('ground', 'assets/platform.png')
        this.load.image('sky', 'assets/sky.png')
        this.load.spritesheet('Jaece', 'assets/player2.png', {
            frameWidth: 154, frameHeight: 120
        })
    }

    create()
    {
        this.add.image(480,360, 'sky')
        this.platforms = this.physics.add.staticGroup()
        //ground
        const ground = this.platforms.create(480,730, 'ground', 0, false) as Phaser.Physics.Arcade.Sprite
        ground
            .setScale(2)
            .refreshBody()
        //floor 1
        this.platforms.create(480,564,'ground', 0, false)
        //floor 2
        this.platforms.create(480,420,'ground', 0, false)
        //floor 3
        this.platforms.create(480,276,'ground', 0, false)
        //floor 4
        this.platforms.create(480, 131, 'ground', 0, false)

        
        this.player = this.physics.add.sprite(100, 450, 'Jaece', 13)
        this.add.container()
        this.player.setBounce(0.25)
        this.player.setScale(0.7,0.7)
        this.player.setCollideWorldBounds(true)

        //make player go left
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Jaece', {
                frames: [15,13] 
            }),
            frameRate: 8,
            repeat: -1
        })
        //make player go right
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Jaece', {
                frames: [16,14] 
            }),
            frameRate: 8,
            repeat: -1
        })
        //make player climb 
        this.anims.create({
            key: 'ladder',
            frames: this.anims.generateFrameNumbers('Jaece', {
                frames: [0,1] 
            }),
            frameRate: 8,
            repeat: -1
        })
        this.physics.add.collider(this.player, this.platforms)
        this.cursors = this.input.keyboard.createCursorKeys()

        this.playerController = new PlayerController(this.player, this, this.handlePlayerAction.bind(this))
        this.playerController.setState('idle')
    }

    handlePlayerAction()
	{
		
	}

    update() 
    {
        this.playerController?.update(this.player)

    }
}
