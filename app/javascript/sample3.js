let students = [
  {
    name: "Taro",
    language: 84,
    maths: 62,
    science: 50
  },
  {
    name: "Kenji",
    language: 54,
    maths: 70,
    science: 62
  },
  {
    name: "Haruna",
    language: 90,
    maths: 80,
    science: 70
  }
]

students                      //mapメソッドを使ってtotalプロパティが含まれたオブジェクトを新しく作ります
  .map(function(student){
    let total = student.language +
                student.maths +
                student.science
    return{
      name: student.name,
      total: total
    }
  })
  .filter(function(student){
    return student.total >= 190    //合計190点以上を合格、表示する仕様
  })
  .forEach(function(student){
  console.log(
    student.name +
    "さんの合計点数は" +
    student.total +
    "点です"
  )
})
