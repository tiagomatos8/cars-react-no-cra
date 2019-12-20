import { vehiclesData } from '../../data/data'

describe('Vehicles Component Test Suite', () => {

  test('vehicles mock data should be truthy', () => {
    expect(vehiclesData).toBeTruthy();
    expect(vehiclesData.length).toBeTruthy();
  });

  test('vehicles mock data should have valid length', () => {
    expect(vehiclesData.length).toBe(2);
  });

  test('vehicles mock data should have vehicles with valid model', () => {
    expect(vehiclesData[0]).toBeTruthy();
    expect(vehiclesData[0].model).toBeTruthy();
    expect(vehiclesData[1]).toBeTruthy();
    expect(vehiclesData[1].model).toBeTruthy();
  });

  test('vehicles mock data should have vehicles with valid series', () => {
    expect(vehiclesData[0]).toBeTruthy();
    expect(vehiclesData[0].series).toBeTruthy();
    expect(vehiclesData[1]).toBeTruthy();
    expect(vehiclesData[1].series).toBeTruthy();
  });

  test('vehicles mock data should have vehicles with valid variant', () => {
    expect(vehiclesData[0]).toBeTruthy();
    expect(vehiclesData[0].variant).toBeTruthy();
    expect(vehiclesData[1]).toBeTruthy();
    expect(vehiclesData[1].variant).toBeTruthy();
  });

  test('vehicles mock data should have vehicles with valid new price', () => {
    expect(vehiclesData[0]).toBeTruthy();
    expect(vehiclesData[0].new_price).toBeTruthy();
    expect(vehiclesData[1]).toBeTruthy();
    expect(vehiclesData[1].new_price).toBeTruthy();
  });

  test('vehicles mock data should have vehicles with valid monthly price', () => {
    expect(vehiclesData[0]).toBeTruthy();
    expect(vehiclesData[0].from).toBeTruthy();
    expect(vehiclesData[1]).toBeTruthy();
    expect(vehiclesData[1].from).toBeTruthy();
  });

});