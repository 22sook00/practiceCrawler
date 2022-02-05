const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const csv = fs.readFileSync('csv/data.csv');
// const records = parse(csv.toString('utf-8'));
// records.forEach((r, i) => {
//   console.log(i, r);
// });

// console.log('csv',parse(csv.toString()));
// buffer 는 0,1 로 이루어져있으므로 toString() 메소드를 통해 문자열로 변경
// csv-parse 의 parse 메서드로 문자열을 2차원 배열로 바꾼다.


//xlsx
const xlsx = require('xlsx');
const workbook=xlsx.readFile('xlsx/data.xlsx');
console.log('workbook:',Object.keys(workbook.Sheets));

const ws = workbook.Sheets.Sheet1
const records = xlsx.utils.sheet_to_json(ws);
console.log(records)

//entries 사용 시 내부 배열이 [인덱스, 값] 모양으로 변경.
for(const [i,r] of records.entries()){
  console.log(i,r.제목, r.링크)
}