var ForagerBee = function() {
  Bee.call(this);
  this.age = 10,
  this.job = 'find pollen',
  this.color = Bee.prototype.color,
  this.food = Grub.prototype.food
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.eat = Grub.prototype.eat;
ForagerBee.prototype.canFly = true;
ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function(item) {
  this.treasureChest.push(item);
}
