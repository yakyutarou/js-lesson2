let myThings = {
  sports: "サッカー",
  hobby:"テーブルトークRPG",
  food:"カレーライス"
}

console.log(myThings)

let myThings2 = {
  sports: "サッカー",
  hobby:"テーブルトークRPG",
  food:"カレーライス"
}

//ドット表記 カレーライスと表示
console.log(myThings2.food)
//ブラケット表示 カレーライスと表示
console.log(myThings2["food"])
//プロパティが存在しない時undefinedと表示
console.log(myThings2.japan)