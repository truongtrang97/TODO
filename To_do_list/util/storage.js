const TODO_STORAGE_KEY='TODOS'
//key ni để lưu vào localstorage
export default{
    get(){
        return  JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [] //list todo ban đầu là mảng
        // láy dữ liệu ra xong parse chuyển JS
    },
    // lưu vào localstorage là JSON khi lấy ra phải chuyển qua JS nên dùng .parse
    set(todos){
    //set ni để chuyển qua dang JSON và lưu lại
     localStorage.setItem(TODO_STORAGE_KEY,JSON.stringify(todos))
    //  CÚ PHÁP (nơi lưu,dữ liệu được chuyển từ JS sang Json)
    }
}
// khi f5 thì bị mất dữ liệu nên phải lưu vào local storage