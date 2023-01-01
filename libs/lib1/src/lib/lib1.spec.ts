import {lib1, lib1_part2} from './lib1';

describe('lib1', () => {
  it('should work', () => {
    expect(lib1_part2()).toEqual('lib_part21');
  });
  it('should work', () => {
    expect(lib1()).toEqual('lib2');
  });
});
