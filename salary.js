function netpay(){
    const TaxRate = 0.3;
    const nhifRate =0.02;
    const nssfRate = 0.01;

   const basicSalary = parseFloat(prompt("Enter basic salary"));
   const allowance = parseFloat(prompt("Enter totall allowance"));

   const grossSalary = basicSalary + allowance;

   const nssfDeduction = math.min(grossSalary *nssfRate);
   const nhifDeduction = math.min(grossSalary * nhifRate);
   const paye = math.max(grossSalary - nhifDeduction - nssfDeduction) * TaxRate


   const netSalary = grossSalary - nhifDeduction - nssfDeduction - paye;


   console.log(window.alert('NHIF deduction is: ${nhifDeduction}'));
   console.log(window.alert('NSSF deduction is: ${nssffDeduction}'));
   console.log(window.alert('PAYE: ${Paye}'));

   console.log(window.alert('gross salary is: ${grossSalary}'));
   console.log(window.alert('net pay: ${netSalary}'));

}