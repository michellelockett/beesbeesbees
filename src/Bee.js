var Grub = function() {
  this.age = 0,
  this.color = 'pink'
};

Grub.prototype.food = 'jelly';
Grub.prototype.eat = function() {
  this.food = 'none';
}
var Bee = function() {
  Grub.call(this);
  this.color = 'yellow';
  this.age = 5;
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.job = 'keep on growing';

Bee.prototype.color = 'yellow';

