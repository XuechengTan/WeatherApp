import functions  from './testCityPos';


test('Test London weather API', () => {
  expect.assertions(1);
  //input the city which you wanna to test 
  return functions.getPosWeather('-36.8667','174.7667')
    .then(data => {
      expect(data.name).toBe('Auckland');
    });
})


