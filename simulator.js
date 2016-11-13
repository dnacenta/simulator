//Vikings' Game

//Vikings

var Viking = function(name, health, strength){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.luck = Math.random();
};

var Ragnar = new Viking('Ragnar', 100, 10)
var Rollo = new Viking('Rollo', 130, 8)

//-------------------------------------------------------


//Pit Fight

var Pit = function(viking1, viking2){
  this.viking1 = viking1
  this.viking2 = viking2
//combat
  this.combat = function(){
    console.log('Aaaaarghhh!!');
    this.viking1.health -= (this.viking2.strength*this.viking2.luck);
    this.viking2.health -= (this.viking1.strength*this.viking1.luck);
    // return this.viking1.health;
    // return this.viking2.health;
    console.log(this.viking1.name + ' has '+ Math.floor(this.viking1.health) + ' points of health after the attack' );
    console.log(this.viking2.name + ' has '+ Math.floor(this.viking2.health) + ' points of health after the attack' );
  }
//noDying
  this.noDying = function(){
    if (this.viking1.health > this.viking2.health) {
      console.log(this.viking1.name + ' has won.');
    }

    else {
      console.log(this.viking2.name + ' has won.');
    }
    console.log('The fight is over!');
  }
//fight
  this.fight = function(){
      var turn = 0;

      while ((turn <= 10) && ((this.viking1.health>20) && (this.viking2.health>20))) {
        this.combat();
        turn += 1;
      }

        this.noDying();
  }
};

var Arena = new Pit(Ragnar, Rollo)
Arena.fight();
