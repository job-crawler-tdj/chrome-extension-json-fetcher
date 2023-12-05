var elementsWithHref = document.querySelectorAll('[href]');

var jobListItems = Array.from(elementsWithHref).filter(function (element) {
    let hrefValue = element.getAttribute('href');
    return hrefValue.startsWith('/companies') && hrefValue.includes('jobs');
});

let jobs = [];
jobListItems.forEach((item, index) => {
    let minMonthlySalary = 0;
    let maxMonthlySalary = 0
    let minAnnualSalary = 0;
    let maxAnnualSalary = 0;
    let jobName = '';
    let companyName = '';
    let jobElementName = item.querySelector('.text-lightest-navy');
    if (!jobElementName) {
        return;
    }

    jobName = jobElementName.innerText;
    let companyElementName = item.querySelector('.text-main-blue');
    if (companyElementName) {
        companyName = companyElementName.innerText;
    }

    let group = item.querySelector('.text-light-navy');
    if (group) {
        let thirdDivInGroup = group.querySelector('div:nth-child(3)');
        if (thirdDivInGroup) {
            let salaryElement = thirdDivInGroup.querySelector('.truncate');
            if (salaryElement) {
                const regexAnnual = /NT\$ (\d{1,3}(,\d{3})*|\d+) - (\d{1,3}(,\d{3})*|\d+) \(年薪\)/;
                const regexMonthly = /NT\$ (\d{1,3}(,\d{3})*|\d+) - (\d{1,3}(,\d{3})*|\d+) \(月薪\)/;
                let salaryText = salaryElement.innerText;
                let annualMatch = regexAnnual.exec(salaryText);
                let monthlyMatch = regexMonthly.exec(salaryText);
                if (annualMatch) {
                    minAnnualSalary = parseInt(annualMatch[1].replace(/,/g, ''), 10);
                    maxAnnualSalary = parseInt(annualMatch[3].replace(/,/g, ''), 10);
                } else if (monthlyMatch) {
                    minMonthlySalary = parseInt(monthlyMatch[1].replace(/,/g, ''), 10);
                    maxMonthlySalary = parseInt(monthlyMatch[3].replace(/,/g, ''), 10);
                }
            }
        }
    }

    jobs.push({
        source: 'yourator',
        jobName: jobName,
        companyName: companyName,
        url: item.href,
        minMonthlySalary: minMonthlySalary,
        maxMonthlySalary: maxMonthlySalary,
        minAnnualSalary: minAnnualSalary,
        maxAnnualSalary: maxAnnualSalary,
    });
});

console.log(jobs);