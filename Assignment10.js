// Question 1: Vec Class
function Vec(x, y) {
    this.x = x;
    this.y = y;
  }
  
  // Method to add another vector
  Vec.prototype.plus = function(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  };
  
  // Method to subtract another vector
  Vec.prototype.minus = function(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  };
  
  // Getter to calculate the length of the vector
  Object.defineProperty(Vec.prototype, 'length', {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  });
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  
  console.log(new Vec(3, 4).length);
  // → 5
  
  console.log("--------------------------")

  // Question 2: Group Class
  class Group {
    constructor() {
      this.members = [];
    }
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
    delete(value) {
      this.members = this.members.filter(member => member !== value);
    }
    has(value) {
      return this.members.includes(value);
    }
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  let group = Group.from([10, 20]);
  console.log(group.has(10)); // → true
  console.log(group.has(30)); // → false
  group.add(10); // Adding 10 again has no effect
  group.delete(10); // Deleting 10 from the group
  console.log(group.has(10)); // → false
  