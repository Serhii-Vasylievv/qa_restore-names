'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');


  it(`The function should return 'firstName' from the fullName'`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it(`if 'firstName' has undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  }); 
  
  it(`should check if the 'FirstName' had two words`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Muhamed Aly Boxer',
      },
    ];
    restoreNames(users);
    expect(users[0].firstName).toBe('Muhamed Aly');
  });

  it(`should return error message if the 'fullName' is empty`, () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: '',
      },
    ];
    restoreNames(users);
    expect(users[0].fullName).toThrow('fullName is empty');
  });
});