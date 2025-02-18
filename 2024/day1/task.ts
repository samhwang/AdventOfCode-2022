import { parseInput } from '../src/parse-input';

function parseIntoList(input: string[]): [number[], number[]] {
  return input.reduce(
    ([leftList, rightList], line) => {
      const [left, right] = line.split('  ').map((char) => Number.parseInt(char, 10));
      leftList.push(left);
      rightList.push(right);
      return [leftList, rightList];
    },
    [[], []] as [number[], number[]]
  );
}

// PART 1: Calculate distance between ascending pairs

function part1(input: string[]): number {
  const [leftList, rightList] = parseIntoList(input);
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let output = 0;
  for (let i = 0; i < leftList.length; i++) {
    output += Math.abs(leftList[i] - rightList[i]);
  }
  return output;
}

// PART 2: Calculate Similarity between the 2 lists

function part2(input: string[]): number {
  const [leftList, rightList] = parseIntoList(input);

  let output = 0;
  for (let i = 0; i < leftList.length; i++) {
    const target = leftList[i];
    const occurences = rightList.filter((num) => num === target).length;

    output += target * occurences;
  }
  return output;
}

function go(): void {
  console.time('task');

  console.time('parse-input');
  const input = parseInput('./input.txt');
  console.timeEnd('parse-input');

  console.time('part 1');
  const res1 = part1(input);
  console.log('PART 1: ', res1);
  console.timeEnd('part 1');

  console.time('part 2');
  const res2 = part2(input);
  console.log('PART 2: ', res2);
  console.timeEnd('part 2');

  console.timeEnd('task');
}

go();
