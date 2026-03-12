
let employeeHikeInfo: Map<string, number> = new Map();

caluculateEmployeeHike("Alice Johnson", 75000.0, 5.1, 4.2);
caluculateEmployeeHike("Bob Smith", 68000.0, 3.2, 3.8);
caluculateEmployeeHike("Carol Davis", 82000.0, 7.1, 4.5);
caluculateEmployeeHike("David Brown", 90000.0, 10.2, 2.5);
caluculateEmployeeHike("Eva Green", 60000.0, 2.4, 3.5);

function caluculateEmployeeHike(name: string, baseSalary: number, experience: number, yearEndRating: number) {

    let hike: number = 0;
    let hikePercentage: number = 0;
    let reward: number = 0;
    let percentOfBasePay: number = 0;
    let bonus: number = 0;

    if (experience >= 5) {
        reward = 5000;
    }
    if (yearEndRating >= 4.0) {
        percentOfBasePay = 15.0;
        bonus = 1500;
    } else if (yearEndRating >= 3 && yearEndRating < 4) {
        percentOfBasePay = 10.0;
        bonus = 1200;
    } else {
        percentOfBasePay = 3.0;
        bonus = 300;
    }
    hike = (baseSalary * percentOfBasePay) + bonus + reward;
    hikePercentage = hike / baseSalary;
    employeeHikeInfo.set(name, hikePercentage);
}

console.log(employeeHikeInfo);