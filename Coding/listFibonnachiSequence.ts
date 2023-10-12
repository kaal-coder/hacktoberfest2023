const listFibonnachiSequence = (n: number): number[] => {
  let output: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    const nextValue: number = output[i - 1] + output[i - 2];
    output.push(nextValue);
  }

  return output;
};
