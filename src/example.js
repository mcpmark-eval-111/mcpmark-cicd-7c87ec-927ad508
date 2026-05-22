// This file intentionally contains linting violations
// to demonstrate that the ESLint workflow correctly fails the CI check.

var unusedVariable = "this variable is never used"
const message = "Hello, world!"

function greet(name) {
    console.log("Greeting: " + name)
    var anotherUnused = 42
    return "Hi, " + name
}

greet("Tester")
