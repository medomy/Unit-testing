import { capitalizeText, createArray} from "../index.js";
import { expect,assert,should } from "chai";
/*var expect = require("chai").expect;
var assert = require("chai").assert;
var should=require("chai").should();*/

//let x =1;

describe("testing capitilize texts" , function(){
    

    it("test the return value type" , ()=>{
        expect("test return type",capitalizeText("iti")).to.be.a("string")
    });

    it("return a value capitilized",()=>{
        assert.equal(capitalizeText("iti"),"ITI");
    })

    it("check the return value",()=>{
        assert.notEqual(capitalizeText("iti"),"HELLO");
    })
    context("with non-string args",()=>{
        expect(()=>{
            capitalizeText(1)
        }).to.throw(TypeError,"parameter should be string");
    })

})

describe("testing create array",()=>{
    beforeEach(done => setTimeout(done, 500));

    it("the return value is an array",()=>{
        assert.isArray(createArray(5));
    });

    it("returned array is of a certail length and includes 1",()=>{
        expect(createArray(3)).to.have.lengthOf(3).that.includes(1);
    });

    // a pending test case 
    it("pending test");
    

    







})