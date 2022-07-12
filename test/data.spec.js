import { filterByDirector,filterByProducer,top10Films, sortAz, sortZa, sortByScore, sortLessOld,sortOldest} from '../src/data.js';
//import data from '../test/ghibliTest.js';

  describe ('filterByDirector',() => {
    it('is a function',() => {
      expect(typeof filterByDirector).toBe('function');
    });

    const testData = [{"film": "Only Yesterday","director": "Isao Takahata"},{"film": "My Neighbor Totoro","director": "Hayao Miyazaki"}]

    it('should show `Hayao Miyazaki`',() => {
      expect(filterByDirector(testData,'Hayao Miyazaki', `director`)).toEqual([{ director: "Hayao Miyazaki", film: "My Neighbor Totoro"}]);
    });

    it('should show `Isao Takahata`',() => {
      expect(filterByDirector(testData,'Isao Takahata', `director`)).toEqual([{ director: "Isao Takahata", film: "Only Yesterday"}]);
    });
    
  });

  describe ('filterByProducer',() => {
    it('is a function',() => {
      expect(typeof filterByProducer).toBe('function');
    });

    const testData = [{"film": "Only Yesterday","producer": "Toshio Suzuki"},{"film": "Grave of the Fireflies","producer":"Toru Hara"}]

    it('should show `Toshio Suzuki`',() => {
      expect(filterByProducer(testData,'Toshio Suzuki',`producer`)).toEqual([{producer: "Toshio Suzuki", film: "Only Yesterday"}]);
    });

    it('should show `Toru Hara`',() => {
      expect(filterByProducer(testData,'Toru Hara',`producer`)).toEqual([{producer: "Toru Hara", film: "Grave of the Fireflies"}]);
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
  });

  describe('sortAz', () => {
    it('is a function', () => {
      expect(typeof sortAz).toBe('function');
    });

    const testData = [{title:"Only Yesterday"}, {title:"My Neighbor Totoro"}];
    it('Returns `A-z`', () => {
    expect(sortAz(testData,`a-to-z`)).toEqual([{"title": "My Neighbor Totoro"}, {"title": "Only Yesterday"}]);
    });

    it('Returns similar titles `A-z`', () => {
    const sameTitle=[{title:"My Neighbor Totoro"},{title:"My Neighbor Totoro"}];
    expect(sortAz(sameTitle,`A-to-z`)).toEqual([{"title":"My Neighbor Totoro"},{"title":"My Neighbor Totoro"}]);
    });

    it('for this case return `A-z`', () => {
      const testTitles=[{title:"b"},{title:"a"}]
      expect(sortAz(testTitles,`a-to-Z`)).toEqual([{"title":"a"},{"title":"b"}]);
    });

  describe('sortZa', () => {
    it('is a function', () => {
      expect(typeof sortZa).toBe('function');
    });

    it('Returns `Z-a`', () => {
      expect(sortZa(testData, `Z-a`)).toEqual([{"title": "Only Yesterday"},{"title": "My Neighbor Totoro"}])
    });

    it('for this case return `Z-a`', () => {
      const sameTitle=[{title:"b"},{title:"a"}]
      expect(sortZa(sameTitle,`Z-to-a`)).toEqual([{"title":"b"},{"title":"a"}]);
    }); 
    })
  });

  describe('sortByScore', () => {
    it('is a function', () => {
      expect(typeof sortByScore).toBe('function');
    });
  
    const filmTest = [{title: "Only Yesterday", "rt_score": "100"},{"title": "Kiki's Delivery Service","rt_score": "96"},{"title": "My Neighbor Totoro","rt_score": "93"}]
  
    it('shows the score result for the film `Only Yesterday`', () => {
      expect(sortByScore(filmTest,`score`)).toEqual([{"rt_score": "100", title: "Only Yesterday"},{"title": "Kiki's Delivery Service","rt_score": "96"},{"title": "My Neighbor Totoro","rt_score": "93"}]);
    });

  });

  describe('sortLessOld', () => {
    it('is a function', () => {
      expect(typeof sortLessOld).toBe('function');
    });

    const testData =[{"title": "Only Yesterday", "release_date": "1991"},{"title": "Kiki's Delivery Service","release_date": "1989"},{"title": "My Neighbor Totoro","release_date": "1988"}]

    it('shows the least old video',() =>{
      expect(sortLessOld(testData,`sortLessOld`)).toEqual([{"title": "Only Yesterday", "release_date": "1991"},{"title": "Kiki's Delivery Service","release_date": "1989"},{"title": "My Neighbor Totoro","release_date": "1988"}]);
    })
  });

  describe('sortOldest', () => {
    it('is a function', () => {
      expect(typeof sortOldest).toBe('function');
    });

    const testData =[{"title": "Only Yesterday", "release_date": "1991"},{"title": "Kiki's Delivery Service","release_date": "1989"},{"title": "My Neighbor Totoro","release_date": "1988"}]

    it('shows the Oldest video',() =>{
      expect(sortOldest(testData,`sortOldest`)).toEqual([{"title":"My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service","release_date": "1989"},{"title": "Only Yesterday", "release_date": "1991"}]);
    })
  });

