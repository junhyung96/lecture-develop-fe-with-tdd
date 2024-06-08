// namespace 생성
var App = App || {}

// App.ClickCounter = () => {
//     return {
//         getValue(){
//             return 0
//         }
//     }
// }

// getValue 에서 반환되는 값은 변수이므로 변수로 따로 빼두자
App.ClickCounter = () => {
    let value = 0
    return {
        getValue(){
            return value
        }
    }
}