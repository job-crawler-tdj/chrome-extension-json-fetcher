const jobListItems = document.querySelectorAll('.no-gutters');
let jobs = [];
jobListItems.forEach((item, index) => {
    const jobNameElement = item.querySelector('.info-job__text');
    if (!jobNameElement) {
        return;
    }

    const jobName = jobNameElement.innerText;
    const companyNameElement = item.querySelector('.info-company__text');
    let companyName = '';
    if (companyNameElement) {
        companyName = companyNameElement.innerText;
    }

    const jobLink = item.querySelector('.jb-link');
    let url = '';
    if (jobLink) {
        url = jobLink.getAttribute('href');
    }

    let minMonthlySalary = 0;
    let maxMonthlySalary = 0
    let minAnnualSalary = 0;
    let maxAnnualSalary = 0;

    jobs.push({
        source: '104',
        jobName: jobName,
        companyName: companyName,
        url: url,
        minMonthlySalary: minMonthlySalary,
        maxMonthlySalary: maxMonthlySalary,
        minAnnualSalary: minAnnualSalary,
        maxAnnualSalary: maxAnnualSalary,
    });
});

console.log(jobs);

