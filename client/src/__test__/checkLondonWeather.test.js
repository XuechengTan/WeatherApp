import functions  from './checkLondonWeather';


test('Test London weather API', () => {
  expect.assertions(1);
  //input the city which you wanna to test 
  return functions.getLondonWeather('London')
    .then(data => {
      expect(data.name).toBe('London');
    });
})


