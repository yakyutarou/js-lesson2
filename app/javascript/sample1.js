//今の年月日と時間を取得
let myDate = new Date()  //new DateでDateオブジェクトの初期化。

console.log(myDate.getFullYear()) //メソッドを使って日付の文字列を出力する。
console.log(myDate.getMonth()+1)  //(注意)月の数値は０から始まるので＋１する。
console.log(myDate.getDate())
console.log(myDate.getHours())

///任意の日付を取得
//明日の日付を取得
let myDate2 = new Date()
myDate2.setDate(myDate2.getDate()+1)
console.log(myDate2.getDate())

//昨日の日付を取得
let myDate3 = new Date()
myDate3.setDate(myDate3.getDate()-1)
console.log(myDate3.getDate())

//今月の月末を取得
let myDate4 = new Date()
myDate4.setMonth(myDate4.getMonth()+1)
myDate4.setDate(0)
console.log(myDate4.getDate())

//任意の日付を取得  例：翌月の１５日を取得
let myDate5 = new Date()
myDate5.setMonth(myDate5.getDate()+1)
myDate5.setDate(15)
console.log(myDate5)