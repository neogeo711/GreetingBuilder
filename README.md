# Greeting Builder

A small JavaScript program that builds personalized greetings from a name and a time of day. It is a solution to the [roadmap.sh Greeting Builder project](https://roadmap.sh/projects/js-greeting-builder).

## Requirements

- [Node.js](https://nodejs.org/) (any recent version)

## Usage

```bash
node greeting.js
```

Output:

```
Good morning, Ava Stones
Good evening, Noah Kim
Good afternoon, Mina Patel
```

## Functions

| Function | Description |
| --- | --- |
| `formatName(firstName, lastName)` | Returns the first and last name as a single string, e.g. `"Ava Stones"`. |
| `getGreeting(timeOfDay)` | Returns `"Good <timeOfDay>"`, e.g. `"Good morning"`. Expects `"morning"`, `"afternoon"`, or `"evening"`. |
| `createGreeting(firstName, lastName, timeOfDay)` | Combines the two functions above into the final greeting, e.g. `"Good morning, Ava Stones"`. |

## Example

```js
createGreeting("Ava", "Stones", "morning");
// => "Good morning, Ava Stones"
```

## Project Structure

```
greetingBuilder/
├── greeting.js   # greeting functions and example calls
└── README.md
```
