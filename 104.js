const jobListItems = document.querySelectorAll('.job-list-item');
let jobs = [];
jobListItems.forEach((item, index) => {
    const jobName = item.getAttribute('data-job-name');
    if (!jobName) {
        return;
    }

    const companyName = item.getAttribute('data-cust-name');
    const jobLink = item.querySelector('.js-job-link');
    let url;
    if (jobLink) {
        url = jobLink.getAttribute('href');
    }

    let minMonthlySalary = 0;
    let maxMonthlySalary = 0
    let minAnnualSalary = 0;
    let maxAnnualSalary = 0;
    const salaryElement = item.querySelector('.b-tag--default');
    if (salaryElement) {
        const salaryUrl = salaryElement.href;
        if (salaryUrl) {
            const url = new URL(salaryUrl);
            const searchParams = url.searchParams;
            const sctpValue = searchParams.get('sctp');
            const scminValue = searchParams.get('scmin');
            const scmaxValue = searchParams.get('scmax');
            if (sctpValue === 'Y') {
                minAnnualSalary = scminValue;
                maxAnnualSalary = scmaxValue;
            } else {
                minMonthlySalary = scminValue;
                maxMonthlySalary = scmaxValue;
            }
        }
    }

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