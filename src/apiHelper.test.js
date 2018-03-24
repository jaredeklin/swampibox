import {
  fetchPeopleData, 
  fetchVehicleData, 
} from './apiHelper';

import { mockVehicleData, finalVehicleData } from './mockData/mockData'

describe('fetchVehicleData', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockVehicleData)
    }));
  })

  it('should do shit', async () => {
    const cleanVehicle = await fetchVehicleData()
    expect(cleanVehicle).toEqual(finalVehicleData)
  })
})