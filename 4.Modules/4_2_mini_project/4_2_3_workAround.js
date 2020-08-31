/** [workAround.js]
 *
 */
import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './4_2_2_employee';
import Employee from './4_2_2_employee';

 function getEmployeeInformation(inputSalary) {
     Employee.salrary = inputSalary;
     console.log('Cadre: ' + getCadre());
     console.log('Tax: ' + calculateTax());
     console.log('Benefits: '+ getBenefits());
     console.log('Bonus: ' + calculateBonus());
     console.log('Reimbursement Eligibility: '+ reimbursementEligibility() + '\n');
 }

 getEmployeeInformation(10000);
 getEmployeeInformation(50000);
 getEmployeeInformation(100000);