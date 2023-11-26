import React, { useState } from "react";

const Calculate = (value,result) => {

    const calculateArithmetic =(expression) => {
        // Tokenize the expression into numbers and operators
        const tokenize = (expression) => expression.match(/[\d.]+|[+\-*/]/g);
        console.log(expression)
      
        // Convert infix expression to Reverse Polish Notation (RPN) using the Shunting Yard Algorithm
        const shuntingYard = (tokens) => {
          const outputQueue = [];
          const operatorStack = [];
      
          // Function to determine the precedence of operators
          const getPrecedence = (operator) => {
            switch (operator) {
              case "+":
              case "-":
                return 1;
              case "*":
              case "/":
                return 2;
              default:
                return 0; // for numbers
            }
          };
      
          tokens.forEach((token) => {
            if (!isNaN(token)) {
              // If the token is a number, push it to the output queue
              outputQueue.push(Number(token));
            } else if ("+-*/".includes(token)) {
              // If the token is an operator
              while (
                operatorStack.length &&
                getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)
              ) {
                // Pop operators from the stack to the output queue until precedence is satisfied
                outputQueue.push(operatorStack.pop());
              }
              // Push the current operator to the stack
              operatorStack.push(token);
            }
          });
      
          // Pop any remaining operators from the stack to the output queue
          while (operatorStack.length) {
            outputQueue.push(operatorStack.pop());
          }
      
          return outputQueue;
        };
      
        // Evaluate the RPN expression to get the final result
        const evaluateRPN = (rpn) => {
          const stack = [];
      
          rpn.forEach((token) => {
            if (!isNaN(token)) {
              // If the token is a number, push it to the stack
              stack.push(token);
            } else {
              // If the token is an operator, pop numbers from the stack and perform the operation
              const b = stack.pop();
              const a = stack.pop();
              switch (token) {
                case "+":
                  stack.push(a + b);
                  break;
                case "-":
                  stack.push(a - b);
                  break;
                case "*":
                  stack.push(a * b);
                  break;
                case "/":
                  if (b !== 0) {
                    stack.push(a / b);
                  } else {
                    throw new Error("Division by zero error");
                  }
                  break;
                default:
                  throw new Error("Unknown operator");
              }
            }
          });
      
          // The final result is on the top of the stack
          return stack[0];
        };
      
        // Tokenize the input expression
        const tokens = tokenize(expression);
        console.log(tokens)
      
        // Convert the infix expression to RPN
        const rpn = shuntingYard(tokens);
      
        // Evaluate the RPN expression to get the result
        const result = evaluateRPN(rpn);
      
        return result;
      }
      
      

    console.log("here " + value)
    if(value === "AC"){
        result = 0;
        return result;
    }else if(value === "C"){
        console.log(result + typeof(result))
        result = result.toString().slice(0,-1)
    }else{
        result = calculateArithmetic(result);
    }
    

    return result
}

export default Calculate;