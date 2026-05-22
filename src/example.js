// This file intentionally contains linting violations
// to demonstrate that the ESLint workflow correctly fails the CI check.

const unusedVariable = "I am never used"
const anotherUnused = 42

function greet(name) {
    console.log("Hello, " + name)
    return "Hi " + name
}

greet("World")
