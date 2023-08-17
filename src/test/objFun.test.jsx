
import {data} from '../helper/objFun'
import {describe} from '@jest/globals'

describe('object test',()=>{  
    test('object assignment', () => {
        expect(data).toEqual({one: 1, two: 2});
      });
    
      test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
      });
      
      test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
      });
})
