import { filterByDirector,top10Films} from '../src/data.js';
//import data from '../test/ghibliTest.js';

describe ('filterByDirector',() => {
  it('is a function',() => {
    expect(typeof filterByDirector).toBe('function');
  });

  const testData = [{"film": "Only Yesterday","director": "Isao Takahata",},{"film": "My Neighbor Totoro","director": "Hayao Miyazaki",}]
    it('should show the filter for this director `Hayao Miyazaki`',() => {
    expect(filterByDirector(testData,'Hayao Miyazaki', `director`)).toEqual([{ director: "Hayao Miyazaki", film: "My Neighbor Totoro"}]);
  });

    it ('should show the filter for this director `Hayao Miyazaki`',() => {
    expect(filterByDirector(testData,'Isao Takahata', `director`)).toEqual([{ director: "Isao Takahata", film: "Only Yesterday"}]);
  });
});

describe('top10Films', () => {
  it('is a function', () => {
    expect(typeof top10Films).toBe('function');
  });

  const testData = [{title: "film1",rt_score:95}, {title: "film2",rt_score:100}, {title: "film3",rt_score:97}, {title: "film4",rt_score:98},{title: "film5",rt_score:99}, {title: "film6", rt_score: 96}, {title: "film7",rt_score:94},{title: "film8",rt_score:93},{title: "film9",rt_score:92},{title: "film10",rt_score:91}];
  it('should return the result of the top10Films', () => {
    expect(top10Films(testData)).toEqual([["film2","film5", "film4","film3","film6","film1","film7","film8","film9","film10"],[100,99,98,97,96,95,94,93,92,91]]);
  });

// describe('sortAz',() =>{
//   it('is a function',() =>{
//     expect(typeof sortAz).toBe('function');
//   });

//   const testData = [{title: ""}]
// })
});