export const gamefunctions = (function() {
    const groundFloor=663, firstFloor=509.5, secondFloor=365.5, thirdFloor=221.5, fourthFloor=76.5;
    return {
      ladderUpCollision: function(x: number, y: number) {
        //check to see where player currently is, let him move accordingly
        if (y <= groundFloor && y > firstFloor){
          //first floor ladders position
          if (x >= 376 && x <= 424){
            return true;
          }else{
            return false;
          }
        }else if (y <= (firstFloor) && y > secondFloor){
          //second floor ladders position
          if ((x >= 67 && x <= 110) || (x >= 676 && x<= 721)){
            return true;
          }else{
            return false;
          }
        }else if (y <= secondFloor && y > thirdFloor){
          //third floor ladders position
          if ((x >= 891 && x<= 920) || (x >= 297 && x <= 340)){
            return true;
          }else{
            return false;
          }
        }else if (y <= thirdFloor && y > fourthFloor){
          //fourth floor's ladders position
          if ((x >= 129 && x<= 173) || (x >= 588 && x <= 632)){
            return true;
          }else{
            return false;
          }
        //cant go up if youre on fourth floor
        }else if (y == fourthFloor){
          return false;
        }
        else{
          return false;
        }
      },
  
      ladderDownCollision: function(x: number, y: number) {
        //check to see where player currently is, let him move accordingly
        if (y == groundFloor){
          return false;
        }else if (y < groundFloor && y >= firstFloor){
          if (x >= 376 && x <= 424){
            return true;
          }else{
          return false;
          }
        }else if (y < (firstFloor-0.1) && y >= secondFloor){
          if ((x >= 67 && x <= 110) || (x >= 676 && x<= 721)){
            return true;
          }else{
            return false;
          }
        }else if (y < secondFloor && y >= thirdFloor){
          if ((x >= 891 && x<= 920) || (x >= 297 && x <= 340)){
            return true;
          }else{
            return false;
          }
        }else if (y < thirdFloor && y >= fourthFloor){
          if ((x >= 129 && x<= 173) || (x >= 588 && x <= 632)){
            return true;
          }
          else{
            return false;
          }
        }
        else{
          return false;
        }
      },
  
      usingLadder: function(y: number) {
        if (y < groundFloor && y > firstFloor){
            return true;
        }
        else if (y < firstFloor && y > secondFloor){
            return true;
        }
        else if (y < secondFloor && y > thirdFloor){
            return true;
        }
        else if (y < thirdFloor && y > fourthFloor){
            return true;
        }
        else {
            return false;
        }
      },
  
      setSpriteFloor: function(sprite: { position: { setY: (arg0: number) => void; }; }, y: number) {
        //get y positions of all floors
        const firstFloor=-7, secondFloor=-0.3, thirdFloor=6.5, fourthFloor=13.2, groundFloor=-14;
        if(y >= fourthFloor){
          sprite.position.setY(fourthFloor);
        }
        else if ((y >= thirdFloor && y < thirdFloor + 0.5) || (y <= thirdFloor && y > thirdFloor - 0.5)){
            sprite.position.setY(thirdFloor);
        }
        else if((y >= secondFloor && y < secondFloor + 0.5) || (y <= secondFloor && y > secondFloor - 0.5)){
            sprite.position.setY(secondFloor);
        }
        else if((y >= firstFloor && y < firstFloor + 0.5) || (y <= firstFloor && y > firstFloor - 0.5)){
          sprite.position.setY(firstFloor);
        }
        else if((y >= groundFloor && y < groundFloor + 0.5) || y <= groundFloor){
            sprite.position.setY(groundFloor);
        }
        else{
            //do nothing
        }
      },
  
      isSpriteOnFloor: function(y: number) {
        //get y positions of all floors
        const firstFloor=-7, secondFloor=-0.3, thirdFloor=6.5, fourthFloor=13.2, groundFloor=-14;
        if(y == firstFloor || y == secondFloor || y== thirdFloor || y == groundFloor || y == fourthFloor){
          return true;
        }
        else{
          return false;
        }
      },
  
      sameFloor: function(a: { getY: () => any; }, b: { getY: () => any; }){
        if(a.getY() == b.getY()){
          return true;
        }
        else{
          return false;
        }
  
      },
  
      isCollide: function(a: { getX: () => number; getY: () => number; getR: () => any; }, b: { getX: () => number; getY: () => number; getR: () => any; }) {
        let dx = a.getX() - b.getX();
        let dy = a.getY() - b.getY();
        let distance = Math.sqrt(dx * dx + dy * dy);
  
  
        if (distance < a.getR() + b.getR()) {
        // collision detected!
          return true;
        }
        else{
          return false;
        }
        
      },
  
      isBulletCollide: function(a: { getX: () => number; getY: () => number; getR: () => any; }, b: { getX: () => number; getY: () => number; getBulletR: () => any; }) {
        let dx = a.getX() - b.getX();
        let dy = a.getY() - b.getY();
        let distance = Math.sqrt(dx * dx + dy * dy);
  
        
        if (distance < a.getR() + b.getBulletR()) {
        // collision detected!
          return true;
        }
        else{
          return false;
        }
        
      },
  
      attack: function(a: any, b: any) {
      },
    };
  })();