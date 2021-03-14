import { evaluate } from "mathjs";

class Equation {
  symbols;

  constructor(symbols = []) {
    this.symbols = symbols;
  }

  get result() {
    let result = "-";
    if (this.symbols.length > 0) {
      try {
        result = String(evaluate(this.symbols.join("")));
      } finally {
        return result;
      }
    }

    return result;
  }

  get lastSymbol() {
    return this.symbols[this.symbols.length - 1];
  }

  addOperation(symbol) {
    this.symbols.push(symbol);
  }

  removeLastElement() {
    this.symbols.pop();
  }

  isValidEquation() {
    return (
      this.symbols.length > 0 &&
      (this.isContainsValidBrackets() ||
        this.isLastSymbolNumeric() ||
        this.lastSymbol === ")")
    );
  }

  isValidSymbolToAdd(symbol) {
    if (!Equation.isSymbolNumeric(symbol)) {
      let isValid;
      switch (symbol) {
        case "-":
          isValid = this.lastSymbol !== "+";
          break;
        case "(":
          isValid = true;
          break;
        default:
          isValid = this.isLastSymbolNumeric() || this.lastSymbol === ")";
          break;
      }

      return isValid;
    } else if (this.symbols.length === 0) return symbol !== "0";
    return true;
  }

  isLastSymbolNumeric() {
    return Equation.isSymbolNumeric(this.lastSymbol);
  }

  isContainsValidBrackets() {
    const stack = [];
    let hadOverflow = false;
    this.symbols.forEach((symbol) => {
      if (symbol === "(") {
        stack.push("(");
      } else if (symbol === ")") {
        if (stack.length > 0) {
          stack.pop();
        } else {
          hadOverflow = true;
        }
      }
    });
    return stack.length === 0 && !hadOverflow;
  }

  static isSymbolNumeric(symbol) {
    return !isNaN(Number(symbol));
  }
}

export default Equation;
