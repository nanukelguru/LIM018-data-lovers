import { sortBy } from '../src/data.js';


describe('sortBy', () => {
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  });

  const filmTest = [{title: "Only Yesterday", "rt_score": "100"}]

  it('shows the score result for the film `Only Yesterday`', () => {
    expect(sortBy(filmTest,`score`)).toEqual([{"rt_score": "100", title: "Only Yesterday"}]);
  });


  
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
