export function greet(name) {
  return `hello ${name}`;
}

export function greetAll(names) {
  return names.map(greet);
}
