export class NumberStore {
  constructor(windowSize) {
    this.windowSize = windowSize;
    this.numbers = [];
  }

  addNumber(number) {
  
    if (!this.numbers.includes(number)) {
     
      if (this.numbers.length >= this.windowSize) {
        this.numbers.shift();
      }
      
      this.numbers.push(number);
    }
  }

 
  getNumbers() {
    return [...this.numbers];
  }


  clear() {
    this.numbers = [];
  }
}