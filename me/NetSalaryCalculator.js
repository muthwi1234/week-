function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculation (Tax brackets)
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        paye = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    // Apply personal relief
    paye = Math.max(0, paye - 2400);

    // NSSF (6% of basic salary, capped)
    let nssf = Math.min(basicSalary, 8000) * 0.06;

    // SHIF (2.75% of gross salary)
    let shif = grossSalary * 0.0275;

    // Housing Levy (1.5% of gross salary)
    let housingLevy = grossSalary * 0.015;

    // Net Salary Calculation
    let netSalary = grossSalary - (paye + shif + nssf + housingLevy);

    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`PAYE (Tax): Ksh ${paye}`);
    console.log(`SHIF Deduction: Ksh ${shif}`);
    console.log(`NSSF Contribution: Ksh ${nssf}`);
    console.log(`Housing Levy: Ksh ${housingLevy}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}

