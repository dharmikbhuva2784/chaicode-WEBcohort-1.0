function ShoppingCart() {
    // Initialize items property
    this.items = [];
}

ShoppingCart.prototype.addItem = function(price){
  this.items.push(price);
}

let TotalPrice = 0;
ShoppingCart.prototype.getTotalPrice = function(){
  for(let i = 0 ; i < this.items ; i++){
    TotalPrice = this.items[i] + TotalPrice;
  }
}

console.log(TotalPrice);
