class Worker {
    constructor() {
    }
    basicSalary() {
        return this.hoursWorked * this.rate;
    }
    overviewSalary() {
        return this.basicSalary() - this.TAX;
    }
}
