import makeDiff from '../src/index.js';

const data1 = './__fixtures__/file1.json';

const data2 = './__fixtures__/file2.json';

const result = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

// eslint-disable-next-line no-undef
test("compare diff's between json", () => {
  // eslint-disable-next-line no-undef
  expect(makeDiff(data1, data2)).toBe(result);
});
