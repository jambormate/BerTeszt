import { describe, expect, test } from "vitest";
import { EmployeeStatistics, type Employee } from "./EmployeeStatistics.js";

describe("EmployeeStatistics", () => {
    const employeess: Employee[] = [
        { name: "János", age: 21, salary: 2000 },
        { name: "Kelemen", age: 34, salary: 2250 },
        { name: "Zsófia", age: 56, salary: 1800 },
        { name: "Dávid", age: 40, salary: 2130 },
    ]
    const employeess2: Employee[] = [
        { name: "Anna", age: 25, salary: 3000 },
        { name: "Béla", age: 30, salary: 1500 },
    ]

    test('Konstruktor üres', () => {
        expect(() => new EmployeeStatistics([])).toThrow()
    })
    test('Konstruktor nem üres', () => {
        expect(() => new EmployeeStatistics(employeess)).not.toThrow()
    })
    test("Max salary - test1", () => {
        const stats = new EmployeeStatistics(employeess);
        expect(stats.getMaxSalary()).toBe(2250);
    });

    test("Max salary - test2", () => {
        const stats = new EmployeeStatistics(employeess2);
        expect(stats.getMaxSalary()).toBe(3000);
    });

    test("Average age - test1", () => {
        const stats = new EmployeeStatistics(employeess);
        expect(stats.getAverageAge()).toBe((21 + 34 + 56 + 40) / 4);
    });

    test("Average age - test2", () => {
        const stats = new EmployeeStatistics(employeess2);
        expect(stats.getAverageAge()).toBe((25 + 30) / 2);
    });

    test("Highest paid - test1", () => {
        const stats = new EmployeeStatistics(employeess);
        expect(stats.getHighestPaidEmployee().name).toBe("Kelemen");
    });

    test("Highest paid - test2", () => {
        const stats = new EmployeeStatistics(employeess2);
        expect(stats.getHighestPaidEmployee().name).toBe("Anna");
    });

    test("Count over salary - test1", () => {
        const stats = new EmployeeStatistics(employeess);

        expect(stats.countEmployeesOverSalary(2000)).toBe(2);
        expect(stats.countEmployeesOverSalary(2100)).toBe(2);
        expect(stats.countEmployeesOverSalary(2200)).toBe(1);
    });

    test("Count over salary - test2", () => {
        const stats = new EmployeeStatistics(employeess2);

        expect(stats.countEmployeesOverSalary(1000)).toBe(2);
        expect(stats.countEmployeesOverSalary(2000)).toBe(1);
        expect(stats.countEmployeesOverSalary(4000)).toBe(0);
    });

})