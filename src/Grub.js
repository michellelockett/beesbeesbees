var Grub = function() {
  this.age = 0,
  this.color = 'pink'
};

Grub.prototype.food = 'jelly';

Grub.prototype.eat = function() {
  this.food = 'none';
}
