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

let myThings3 = {}

Object.defineProperties(myThings3,{
  sports:{
    enumerable:true,
    writable: true,
    value:"サッカー"
  },
  food:{
    enumerable: false,
    writable: false,
    value: "カレーライス"
  }
})

// enumerable属性
console.log(Object.keys(myThings3))

// writable属性
myThings3.sports = "ラグビー"
console.log(myThings3.sports)

myThings3.food = "寿司"       //writableにfalseが指定された場合は代入は無効になる。
console.log(myThings3.food)

