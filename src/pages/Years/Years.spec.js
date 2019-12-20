import { yearsData } from '../../data/data';

describe('Years Component Test Suite', () => {

  test('years mock data should be truthy', () => {
    expect(yearsData).toBeTruthy();
    expect(yearsData.length).toBeTruthy();
  });

  test('years mock data should have valid length', () => {
    expect(yearsData.length).toBe(3);
  });

  test('years mock data subitems should be truthy', () => {
    expect(yearsData[0]).toBeTruthy();
    expect(yearsData[0].length).toBeTruthy();
    expect(yearsData[1]).toBeTruthy();
    expect(yearsData[1].length).toBeTruthy();
    expect(yearsData[2]).toBeTruthy();
    expect(yearsData[2].length).toBeTruthy();
  });

  test('years mock data subitems should have valid length', () => {
    expect(yearsData[0].length).toBe(4);
    expect(yearsData[1].length).toBe(4);
    expect(yearsData[2].length).toBe(4);
  });

  test('years mock data subitems should have truthy value', () => {
    expect(yearsData[0][0]).toBeTruthy();
    expect(yearsData[0][1]).toBeTruthy();
    expect(yearsData[0][2]).toBeTruthy();
    expect(yearsData[0][3]).toBeTruthy();
    expect(yearsData[1][0]).toBeTruthy();
    expect(yearsData[1][1]).toBeTruthy();
    expect(yearsData[1][2]).toBeTruthy();
    expect(yearsData[1][3]).toBeTruthy();
    expect(yearsData[2][0]).toBeTruthy();
    expect(yearsData[2][1]).toBeTruthy();
    expect(yearsData[2][2]).toBeTruthy();
    expect(yearsData[2][3]).toBeTruthy();
  });

  test('years mock data subitems should have valid value', () => {
    expect(yearsData[0][0]).toBe('2019');
    expect(yearsData[0][1]).toBe('2018');
    expect(yearsData[0][2]).toBe('2017');
    expect(yearsData[0][3]).toBe('2016');
    expect(yearsData[1][0]).toBe('2015');
    expect(yearsData[1][1]).toBe('2014');
    expect(yearsData[1][2]).toBe('2013');
    expect(yearsData[1][3]).toBe('2012');
    expect(yearsData[2][0]).toBe('2011');
    expect(yearsData[2][1]).toBe('2010');
    expect(yearsData[2][2]).toBe('2009');
    expect(yearsData[2][3]).toBe("I'll walk");
  });

});