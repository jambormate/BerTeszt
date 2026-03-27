import { describe, expect, test } from "vitest";
import { EmployeeStatistics, type Employee } from "./EmployeeStatistics.js";

describe("EmployeeStatistics", ()=>{
    const employeess: Employee[] =[
        {name: "János", age: 21, salary: 2000},
        {name: "Kelemen", age: 34, salary: 2250},
        {name: "Zsófia", age: 56, salary: 1800},
        {name: "Dávid", age: 40, salary: 2130},
    ]
    test('Konstruktor üres', ()=>{
        expect(() => new EmployeeStatistics([])).toThrow()
    })
    test('Konstruktor nem üres',()=>{
        expect(()=> new EmployeeStatistics(employeess)).not.toThrow()
    })
})