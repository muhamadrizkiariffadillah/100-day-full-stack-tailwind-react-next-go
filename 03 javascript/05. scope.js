// Global scope

let global = "global";

function callGlobal() {
  console.log("global:", global);
}

callGlobal();
// local scope

function callLocal() {
  let local = "local";
  console.log("local:", local);
}

callLocal();
// Lexical scope

function Parent() {
  let outerVariable = "Outer";
  function Child() {
    console.log("outerVariable:", outerVariable);
  }
  Child();
}

Parent();
