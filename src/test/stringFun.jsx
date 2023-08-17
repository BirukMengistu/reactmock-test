import { isPalindrome } from '../helper/stringFun'
import {describe, expect, test} from '@jest/globals';

//sum function Test
describe('String function',()=>{

    test('isPlaindrome', ()=>{
        expect(isPalindrome('Bob')).toBe(true)
        expect(isPalindrome('taccat')).toBe(true)
        expect(isPalindrome('come')).toBe(false)
    })
    

})