export function greet(name) {
  return `hello ${name}`;
}

export function greetAll(names) {
  return names.map(greet);
}

export function greetUpper(name) {
  return greet(name).toUpperCase();
}

export function greetAllUpper(names) {
  return names.map(greetUpper);
}

export function greetSummary(names) {
  return greetAllUpper(names).join(", ");
}

// Lattice live proof: reindex this exact revision.
