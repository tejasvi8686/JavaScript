let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}