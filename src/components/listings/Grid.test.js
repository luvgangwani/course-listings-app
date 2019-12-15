import data from '../../data/courses.json';

// Testing numbers with matchers

describe('Number tests', () => {
  const numItems = data.length;

  test('number of items equals 12', () => {
    expect(numItems).toBe(12);
  });

  test('number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
})

// Testing strings with matchers

describe('Strings tests', () => {

    const dataTest = data[0].title;

    test('There is a JS in the title', () => {
        expect(dataTest).toMatch(/JS/);
    });

    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });

});

// Testing arrays with matchers

describe('Arrays tests', () => {

    const dataArr = ['React Native', 'MeteorJS'];

    test('The list mentions React Native and MeteorJS', () => {
        expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(dataArr));
    });

});

// Testing objects with matchers

describe('Objects tests', () => {

    test('The first course to have a property of title', () => {
        expect(data[0]).toHaveProperty('title');
    });
    
    test('The first course to have views of 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    });

});