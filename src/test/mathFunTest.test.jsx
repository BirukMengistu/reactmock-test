import {Sum ,Power} from '../helper/mathFun'
import {describe, expect, test} from '@jest/globals';

//sum function Test
describe('Math function',()=>{
    test('sum function a + = c', ()=>{
        expect(Sum(3,4)).toBe(7)
        expect(Sum(4,4)).toBe(8)
        expect(Sum(4.6,4)).toBe(8.6)
    })
    
    test('power function a = c', ()=>{
        expect(Power(3)).toBe(9)
    })
    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
          for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
          }
        }
      });

})
