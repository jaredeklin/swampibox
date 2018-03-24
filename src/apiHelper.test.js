import {fetchPeopleData} from './apiHelper'
describe('fetchPeopleData', () => {
  const expected = 'https://swapi.co/api/people/';
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({ json: () => Promise.resolve()})
    })

    it('should have been called with correct params', () => {

    })
  })
})