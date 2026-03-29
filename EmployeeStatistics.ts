export interface Employee {
    name: string;
    age: number;
    salary: number;
}

export class EmployeeStatistics {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        if (!employees || employees.length === 0) {
            throw new Error("A dolgozók megadása kötelező")
        }
        this.employees = employees;
    }
    getMaxSalary(): number {
        let max = this.employees[0]!.salary;

        for (const e of this.employees) {
            if (e.salary > max) {
                max = e.salary;
            }
        }
        return max;
    }
    getAverageAge(): number {
        let sum = 0;

        for (const e of this.employees) {
            sum += e.age;
        }
        return sum / this.employees.length;
    }

    getHighestPaidEmployee(): Employee {
        let best = this.employees[0]!;

        for (const e of this.employees) {
            if (e.salary > best.salary) {
                best = e;
            }
        }
        return best;
    }

    countEmployeesOverSalary(salary: number): number {
        let count = 0;

        for (const e of this.employees) {
            if (e.salary > salary) {
                count++;
            }
        }
        return count;
    }
}
