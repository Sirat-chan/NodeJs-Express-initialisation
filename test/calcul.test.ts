import {describe} from "node:test";
import Calcul from "../src/calcul";

describe("calcul", ()=>{
    it('should return 13', function (){
        let a:number=8;
        let b:number=5;
        let expected=13;
        expect(Calcul.somme(a,b)).toBe(expected);
    });
});