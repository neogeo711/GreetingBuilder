//should return the first and last name as one string.
function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
//should return "Good morning", "Good afternoon", or "Good evening"
function getGreeting(timeOfDay) {
  return `Good ${timeOfDay}`;
}
//should use the other two functions and return the final greeting.
function createGreeting(firstName, lastName, timeOfDay) {
  return `${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}`;
}

console.log(createGreeting("Ava", "Stones", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));
