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
    expect(indexConverter(30, 1)).toEqual([1,2]);
  })
  test('2 is 1,3', () => {
   expect(indexConverter(30, 2)).toEqual([1,3]);
  });
test('3 is 1,4', () => {
   expect(indexConverter(30, 3)).toEqual([1,4]);
  });
  test('28 is 1,29', () => {
   expect(indexConverter(30, 28)).toEqual([1,29]);
  });
  test('29 is 1,30', () => {
   expect(indexConverter(30, 29)).toEqual([1,30]);
  });
  test('30 is 2,1', () => {
   expect(indexConverter(30, 30)).toEqual([2,1]);
  });
  test('35 is 2,6', () => {
   expect(indexConverter(30, 35)).toEqual([2,6]);
  });
  test('59 is 1,60', () => {
   expect(indexConverter(30, 59)).toEqual([2,30]);
  });
  test('599 is 20,30 ', () => {
    expect(indexConverter(30, 599)).toEqual([20,30]);
  });
})