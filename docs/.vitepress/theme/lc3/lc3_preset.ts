interface LabPreset {
  /** Function body to tidy up lc3Core for test and return the expected result */
  testCode: string
  /** Function body to get the actual result after run a testcase */
  ansCode: string
  /** Testcases seperated by comma */
  testCases: string
}

const labs: Record<string, LabPreset> = {
  lab1: {
    testCode: `
let [number, id] = testcase.split(':').map(Number)
lc3.memory[0x3100] = number
let mask = 1
let ans  = 0
let bit  = 16
if (number % 2 == 0) {
  number = ~number + 1
}
while (bit--) {
  if (!(number & mask)) {
    ans++
  }
  mask = mask + mask
}
return [id % 10, ans + (id % 10)]`,
    ansCode: 'return [lc3.memory[0x3101], lc3.memory[0x3102]]',
    testCases: '5:12345678, 100:12345678',
  },
  lab2: {
    testCode: `
let [n] = testcase.split(':').map(Number)
lc3.memory[0x3102] = n
let f = 3
let d = 1
while (--n) {
  f = 2 * (f + d) % 4096
  if (f % 8 == 0 | f % 10 == 8) {
    d = -d
  }
}
return [f]`,
    ansCode: 'reutrn [lc3.memory[0x3103]]',
    testCases: '1, 2, 3, 4',
  },
  自定义: {
    testCode: '',
    ansCode: '',
    testCases: '',
  },
}

export const presets = Object.keys(labs)

export function getPreset(lab: string) {
  return labs[lab]
}
