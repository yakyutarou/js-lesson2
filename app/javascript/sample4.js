//配列にオブジェクトを追加するpush
let students2 = []

students2.push({
  name: "Taro",
  language: 84,
  maths: 62,
  science: 50
})

console.log(students2)

//複数の配列を追加する場合には配列のconcatメソッドを使う
let students3 = [
  {
    name: "Taro",
    language: 84,
    maths: 62,
    science: 50
  }
]

students3 = students3.concat([
  {
    name: "Kenji",
    language: 54,
    maths: 70,
    science: 62
  }
])

console.log(students3)