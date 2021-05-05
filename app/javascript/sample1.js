//今の年月日と時間を取得
let myDate = new Date()  //new DateでDateオブジェクトの初期化。

console.log(myDate.getFullYear()) //メソッドを使って日付の文字列を出力する。
console.log(myDate.getMonth()+1)  //(注意)月の数値は０から始まるので＋１する。
console.log(myDate.getDate())
console.log(myDate.getHours())