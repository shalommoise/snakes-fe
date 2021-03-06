 import * as utils from './utils'

 describe("indexConverter", ()=>{
   const {indexConverter} = utils
  test('empty returns 0', () => {
    expect(indexConverter(0,'')).toEqual([])
  });
  test('0 is 1,1', () => {
    expect(indexConverter(30, 0)).toEqual([1,1]);
  });
  test('1 is 1,2', ()=>{
    expect(indexConverter(30, 1)).toEqual([2,1]);
  })
  test('2 is 1,3', () => {
   expect(indexConverter(30, 2)).toEqual([3,1]);
  });
test('3 is 1,4', () => {
   expect(indexConverter(30, 3)).toEqual([4,1]);
  });
  test('28 is 1,29', () => {
   expect(indexConverter(30, 28)).toEqual([29,1]);
  });
  test('29 is 1,30', () => {
   expect(indexConverter(30, 29)).toEqual([30,1]);
  });
  test('30 is 2,1', () => {
   expect(indexConverter(30, 30)).toEqual([1,2]);
  });
  test('35 is 2,6', () => {
   expect(indexConverter(30, 35)).toEqual([6,2]);
  });
  test('59 is 1,60', () => {
   expect(indexConverter(30, 59)).toEqual([30,2]);
  });
  test('599 is 20,30', () => {
    expect(indexConverter(30, 599)).toEqual([30,20]);
  });
})
describe("moveSnake", ()=>{
  const {moveSnake} = utils
test("Move Right", ()=>{
  const snake = [[5,15],[4,15],[3,15]];
  const direction = {x: 1, y: 0}
  expect(moveSnake(snake, direction)).toEqual([[6,15],[5,15],[4,15]])
})
test("Move left", ()=>{
  const snake = [[3,15],[4,15],[5,15]];
  const direction = {x: -1, y: 0}
  expect(moveSnake(snake, direction)).toEqual([[2,15],[3,15],[4,15]])
})
test("Move Up", ()=>{
const snake = [[5,15],[4,15],[3,15]];
const direction = {x: 0, y: -1}
  expect(moveSnake(snake, direction)).toEqual([[5,14],[5,15],[4,15]])
})
test("Move Down", ()=>{
const snake = [[5,15],[4,15],[3,15]];
const direction = {x: 0, y: 1}
  expect(moveSnake(snake, direction)).toEqual([[5,16],[5,15],[4,15]])

})
})
describe("strSnakeToNumSnake", ()=>{
  const {strSnakeToNumSnake} = utils;
  test("empty arr returns arr", ()=>{
  expect(strSnakeToNumSnake([])).toEqual([]);
  expect(strSnakeToNumSnake()).toEqual([]);
   expect(strSnakeToNumSnake('')).toEqual([]);
  });
  test("return '1' to 1", ()=>{
    expect(strSnakeToNumSnake(['1'])).toEqual([1]);
  })
  test("Works for 2 numbers", ()=>{
expect(strSnakeToNumSnake(['1', '2'])).toEqual([1, 2]);

  })
  test("Works for nested array", ()=>{
    expect(strSnakeToNumSnake([['1', '2'], ['3','4']])).toEqual([[1, 2], [3,4]]);
  })
  test("works for long snakes", ()=>{
   
    expect(strSnakeToNumSnake([['5','15'],[4,'15'],['3',15]])).toEqual([[5,15],[4,15],[3,15]]);
  })
})
describe("isSnakeEatingItself",()=>{
  const {isSnakeEatingItself} = utils;
  test("empty snake", ()=>{
    const snake = [];
    expect(isSnakeEatingItself(snake)).toBe(false);
  })
  test("not eating itself returns false", ()=>{
    const snake = [[5,16],[5,15],[4,15]];
    expect(isSnakeEatingItself(snake)).toBe(false);
  })
  test("Snake eats itself === true", ()=>{
    const snake = [[5,16],[5,15],[4,15],[4,16],[5,16]];
expect(isSnakeEatingItself(snake)).toBe(true)
  })
})

describe("overlap", ()=>{
  const {overlap} = utils;
  test("snakes are not near eachother return false", ()=>{
    const snakeA = [[5,14],[5,15],[4,15]];
    const snakeB = [[10,15],[11,15],[12,15]];
    expect(overlap(snakeA, snakeB)).toBe(false)
  })
  test("snake are undefined or not arrays", ()=>{
    expect(overlap([], [])).toBe(false);
    expect(overlap('[]', '[]')).toBe(false);
    expect(overlap()).toBe(false);
     const snakeA = [[5,14],[5,15],[4,15]];
  expect(overlap(snakeA)).toBe(false);
  })
  test("snake is eating the other one", ()=>{
     const snakeA = [[11,15],[12,15],[13,15]];
    const snakeB = [[11,16],[11,15],[11,14]];
     expect(overlap(snakeA, snakeB)).toBe(true);
  })
  test("does not mutate array", ()=>{
      const snakeA = [[11,15],[12,15],[13,15]];
    const snakeB = [[11,16],[11,15],[11,14]];
    overlap(snakeA, snakeB);
    expect(snakeA).toEqual([[11,15],[12,15],[13,15]]);
    expect(snakeB).toEqual([[11,16],[11,15],[11,14]])
  })
})