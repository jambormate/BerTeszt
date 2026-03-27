export interface  Employee{
    name: string;
    age: number;
    salary: number;
}

export class EmployeeStatistics{
    private employees: Employee[];

    constructor(employees: Employee[]){
        if(!employees || employees.length ===0){
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
}
