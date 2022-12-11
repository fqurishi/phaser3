import Phaser from 'phaser'
export const gameobject = (() => {
    
    class GameObject{
        private x: number | null;
        private y: number | null;
        private R: number | null;
        private life: number;
        private engage: boolean;
        private name: null;
        private sprite: Phaser.Physics.Arcade.Sprite;
        constructor(sprite: Phaser.Physics.Arcade.Sprite){
            this.R = null;
            this.life = 1;
            this.engage = false;
            this.name = null;
            this.x = null;
            this.y = null;
            this.sprite = sprite;
        }

        setSprite(sprite : Phaser.Physics.Arcade.Sprite){
            this.sprite = sprite;
        }

        getX(){
            this.x = this.getSprite().x;
            return this.x;
        }
        getY(){
            this.y = this.getSprite().y;
            return this.y;
        }
        getR(){
            return this.R;
        }
        getLife(){
            return this.life;
        }
        getSprite(){
            return this.sprite;
        }
        getName(){
            return this.name;
        }
        getTexture(){
            return this.getSprite().frame.name;
        }
        translateX(a: any){
            this.getSprite().x += (a);
        }
        translateY(a: any){
            this.getSprite().y += (a);
        }
        setX(a: number){
            this.getSprite().x = (a);
        }
        setY(a: number){
            this.getSprite().y = (a);
        }
        setR(a: any){
            this.R = a;
        }
        setLife(a: any){
            this.life = a;
        }
        setName(a: any){
            this.name = a;
        }
        setTexture(t: string | number){
            this.getSprite().setFrame(t);
        }
        update(){}
        updateDirection(){}

    };
    return {
        GameObject: GameObject,
      };
})();