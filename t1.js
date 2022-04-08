let dataBase = [];

function check(list, Name, lName) {
  //this function check that this employee exist or not
  let exist = false;
  for (let x of list) {
    if (x.name === Name && x.lastName === lName) {
      exist = true;
      break;
    }
  }
  return exist;
}
function info(){
  let dBase = [...dataBase];
  for (let i = 0; i < dBase.length; i++) {
     dBase[i]["salary"] = (dBase[i].salaryPerHour *  dBase[i].hourPerMonth);  
  }
  return dBase;
}
function find(fname, lName) {
  //this function return information of this employee by object
  let empInfo;
  let dBase = info()
  for (let i = 0; i < dBase.length; i++) {
    if (dBase[i].name === fname && dBase[i].lastName === lName) {
      empInfo = dBase[i];
      break;
    }else {empInfo = {};}
  }
  return empInfo;
}
function indexElement(fName, lName) {
  // return index of object in dataBase
  let iE = 0;
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].name === fName && dataBase[i].lastName === lName) {
      iE = i;
    }
  }
  return iE;
}

let countAdd = 0;
let countRemove = 0;

function add(name, lastName, hourPerMonth, salaryPerHour) {
  let message = "";

  if (!check(dataBase, name, lastName)) {
    dataBase.push({
      name: name,
      lastName: lastName,
      hourPerMonth: hourPerMonth,
      salaryPerHour: salaryPerHour,
    });
    countAdd++;
    message = "this employee aded";
  } else {
    message = "this employee has been added before";
  }
  let hpm = "greater than 160";
  if (hourPerMonth < 160) {
    hpm = "less than 160";
  }

  return { message: message, hourPerMonth: hpm, count: countAdd };
}

function remove(fName, lName) {
  // this function remove this object in dataBase and return informatin of this employee 
  let info = find(fName, lName);

  let i = indexElement(fName, lName);

  if (check(dataBase, fName, lName)) {
    dataBase.splice(i, 1);
    countRemove++
  }
  return info;
}

function removeWithRange(min, max){
  let conRmv = 0;
  let dBase = info()
  let listInfo = [];
  for (let i = 0; i < dBase.length; i++) {
     if((dBase[i].salary) <= max &&
       (dBase[i].salary) >= min){

      listInfo.push(dBase[i]);
      dataBase.splice(i, 1);
      countRemove++;
      conRmv++;
     }
    
  }
  let text = `count of employee that removed is (${conRmv})`;
  listInfo.push(text)
  return listInfo
}
function Max(array){
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > max){
      max = array[i]
    }
    
  }
  return max;
}

function Min(array){
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
     if(array[i] < min){
       min = array[i];
     }
    
  }
  return min;
}

function Avg(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    
  }
  return sum / array.length
}

function listSalary(){
  let listSalary = [];
  for (let i = 0; i < dataBase.length; i++) {
    listSalary.push(dataBase[i].salaryPerHour *  dataBase[i].hourPerMonth)
    
  }
  return listSalary;
}

function findMaxSalary(){
 
  return Max(listSalary())
}

function findMinSalary(){
 
  return Min(listSalary())
}
function calculateAvg(){
 
  return Avg(listSalary());
}

function salaryDic(){
  let salaryDic = [];
  for (let i = 0; i < dataBase.length; i++) {
    salaryDic.push({name: dataBase[i].name, salary:(dataBase[i].salaryPerHour *  dataBase[i].hourPerMonth)})   
  }
  return salaryDic;

}

function salaryInfo(){
  let above = [];
  let below = [];
  let avgSalary = Avg(listSalary());
  let sDic = salaryDic()
  for (let i = 0; i < sDic.length; i++) {
    if(sDic[i].salary >= avgSalary){
      above.push(sDic[i]);
    }else {
      below.push(sDic[i]);
    }
    
  }
  return {above: above, below: below}
}
function history(){
  return {Add: countAdd, remove: countRemove}
}


function showInfo(name, lName){
  
  return find(name, lName);
}
function showAllInfo(){
  return info()
}
let input = '';
while (input !== 'end'){

  input = prompt('wellcome to this page pleas enter your Command: ');

  switch (input) {

    case 'add' : let info = prompt('enter name, last name, hour per month, salary per month');

    let aInfo = info.split(',');

    let r1 = add(aInfo[0], aInfo[1], aInfo[2], aInfo[3]);

    alert(`${r1.message} his "hour per month" is ${r1.hourPerMonth} `) 
    break;

    case 'remove': let remove1 = prompt('enter name, last name: ');

    let aRemove = remove1.split(',')

    let r2 = JSON.stringify( remove(aRemove[0], aRemove[1]));


    alert(`this employee is Removed : ${r2}`);
    break;

    case 'removeWithRange': let removeWithRange1 = prompt('enter minimom, maximom: ');
    let aRemoveWR = removeWithRange1.split(',');

    let r3 = JSON.stringify( removeWithRange(+aRemoveWR[0], +aRemoveWR[1]) );

    alert(`${r3}`);
    break;

    case 'findMaxSalary': let r4 = findMaxSalary();

    alert(` maximom salary is: ${r4}`)
    break;

    case 'findMinSalary' :let r5 = findMinSalary();
    alert(` minimom salary is: ${r5}`)
    break; 

    case 'calculateAvg' :let r6 = calculateAvg();
    alert(` the average salary is: ${r6}`)
    break; 

    case 'salaryInfo' :let r7 = JSON.stringify( salaryInfo() );
    alert(`${r7}`)
    break; 

          
    case 'history' :let r8 = JSON.stringify( history() );
    alert(`${r8}`)
    break; 

    case 'showInfo' : let emp = prompt('enter name, lasst name: ');
    let aEmp = emp.split(',');
      
    let r9 =  JSON.stringify( showInfo(aEmp[0], aEmp[1]) );
    alert(`${r9}`)
    break; 

    case "showAllInfo" : let r10 =  JSON.stringify( showAllInfo() );

    alert(`${r10}`);
    break;

    case 'end':
      alert('goodby');
      break;

      default: alert('this command is wrong ;)');



  }
}