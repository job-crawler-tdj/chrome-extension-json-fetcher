let mainJob = document.querySelector('.job-header__title');
let companyElement = mainJob.querySelector('.btn-link');
let companyName = companyElement.innerText;
let titleElement = mainJob.querySelector('.text-break');
let jobName = titleElement.getAttribute('title');
let salaryElement = document.querySelector('.text-primary');
let salaryText = salaryElement.innerText;

let minMonthlySalary = 0;
let maxMonthlySalary = 0
let minAnnualSalary = 0;
let maxAnnualSalary = 0;

const matches = salaryText.match(/(\d{1,3}(?:,\d{3})*)/g);

if (matches && matches.length >= 2) {
    // 將逗號移除後轉換為整數
    let min = matches[0].replace(/,/g, '');
    let max = matches[1].replace(/,/g, '');

    min = parseInt(min.replace(/,/g, ''));
    max = parseInt(max.replace(/,/g, ''));
    if (salaryText.includes('月薪')) {
        minMonthlySalary = min;
        maxMonthlySalary = max;
    }

    if (salaryText.includes('年薪')) {
        minAnnualSalary = min;
        maxAnnualSalary = max;
    }
}

console.log({
    companyName: companyName,
    jobName: jobName,
    minMonthlySalary: minMonthlySalary,
    maxMonthlySalary: maxMonthlySalary,
    minAnnualSalary: minAnnualSalary,
    maxAnnualSalary: maxAnnualSalary,
});