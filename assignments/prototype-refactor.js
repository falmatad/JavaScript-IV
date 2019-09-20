/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// -------------------------GameObject Refactored----------------------------------
class GameClass {
    constructor(gameAttr) {
        this.createdAt = gameAttr.createdAt,
        this.name = gameAttr.name,
        this.dimensions = gameAttr.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

// --------^^^^^^^----------GameObject Refactored----------------------------------

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// function CharacterStats(statsUser) {
//     GameObject.call(this, statsUser);
//     this.healthPoints = statsUser.healthPoints;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage`;
//   };
// -------------------------CharacterStats Refactored----------------------------------
class CharacterStats extends GameClass{
    constructor(statsAttr) {
        super(statsAttr);
        this.healthPoints = statsAttr.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}


// -------------------------CharacterStats Refactored----------------------------------

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

//   function Humanoid(humanLike) {
//     CharacterStats.call(this, humanLike);
//     this.team = humanLike.team;
//     this.weapons = humanLike.weapons;
//     this.language = humanLike.language;
//   };
  
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
  
//   }

// -------------------------Humanoid Object Refactored----------------------------------
class Humanoid extends CharacterStats{
    constructor(noidAttr) {
        super(noidAttr);
        this.team = noidAttr.team,
        this.weapons = noidAttr.weapons,
        this.language = noidAttr.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
// -------------------------Humanoid Object Refactored----------------------------------

  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work with these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

    // function Villain(villAttr) {
    //   Humanoid.call(this, villAttr);
    // }
  
    // Humanoid.prototype = Object.create(Villain.prototype);
    // Villain.prototype.shoot = function (target) {
      // target.healthPoints -=1;
      // return `Take that MUHAHAHA! Your healthPoint is now ${target.healthPoints}!`;
    // }
  
    class Villain extends Humanoid{
      constructor(villAttr) {
        super(villAttr);
      }
      shoot(target) {
        target.healthPoints -=1;
      return `Take that MUHAHAHA! Your healthPoint is now ${target.healthPoints}!`;
      }
    }

    class Hero extends Humanoid{
      constructor(heroAttr) {
        super(heroAttr);
      }
      swing(target) {
        target.healthPoints -=2;
      return `Be destroyed oh you evil soul! Your healthPoint is now ${target.healthPoints}!`;
      }
    }
  
  
    const villain1 = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 6,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'EVIL',
      team: 'Monster',
      weapons:'Staff of Evil',
      language: 'English',
    });
  
    const hero1 = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 4,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Destroyer of Evil',
      team: 'The Good Guys',
      weapons:'Sword Of Justice',
      language: 'Arabic',
    });
  
    console.log(villain1.shoot(hero1));
    console.log(hero1.swing(villain1));
    console.log(villain1.shoot(hero1));
    console.log(hero1.swing(villain1));
    console.log(villain1.shoot(hero1));
    console.log(hero1.swing(villain1));
    console.log(villain1.shoot(hero1));
    console.log(hero1.swing(villain1));

/*  
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
