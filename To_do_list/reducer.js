import storage from "./util/storage.js"
// const init={
// //    todos: [
// //     {
// //         title:"Learn HTML",
// //         completed:true,
// //     },
// //     {
// //         title:"Learn css",
// //         completed:false,
// //     },
// //    ]
// // mảng ni để test
// }
const init={
    todos: storage.get(),
    filter:'all',
    filters:{
        all:()=>true,
        active: todo=> !todo.completed,
        completed: todo=>todo.completed
    },
    editIndex:'null',
    // filter ni chứa những điều kiện để lọc 
    // khi hiển thi tất cả dk filter trả về true
    // init =state nên nó sẽ nằm trong store
}
// cách 1:
const actions={
    add({todos},title){
        // click vào không nhập enter nó vẫn add
        if(title){
            todos.push({title,completed:false})
            storage.set(todos)
        }
    },
    toggle({todos},index){
        const todo=todos[index]
        todo.completed=!todo.completed
        storage.set(todos)
    },
    toggleAll({todos},completed){
         todos.forEach((todo)=>todo.completed=completed)
         storage.set(todos)

    },
    destroy({todos},index){
        todos.splice(index,1)
        storage.set(todos)

    },
    switchFilter(state,filter){
        state.filter=filter
        // storage.set(state)
    },
    clearCompleted(state){
        state.todos=state.todos.filter(state.filters.active)
        storage.set(state.todos)

    },
    startEdit(state,index){
        state.editIndex=index
    },
    editEnd(state,title){
        // state.todos.title=title-->k phải như ri nhen, phải vô todo con với index tương ứng
        if(state.editIndex !==null){
            if(title){
                state.todos[state.editIndex].title=title
                storage.set(state.todos)
            }
            else{
                this.destroy(state,state.editIndex)
            }
            state.editIndex=null

            // đoạn ni cần xử lý khi edit rỗng cần xóa lun state đó đi
        }

        // cần lưu lại và thoát chế đôj edit đi
    },
    cancelEdit(state){
        state.editIndex=null
    }
    // lọc ra những todo có todo=> !todo.completed,
    // completed là true , false thể hiện trạng thái check hay không (hiên trạng hiện tại) gán bằng hiện trạng của từng li

    // object trong js có tính chất tham chiếu, nên không nhất thiết trả ra state mới nên dùng dustrusturing cho todos ?? chỗ tham chiếu
}

export default function reducer(state=init, action,args){
    actions[action] && actions[action](state,...args)
    // action ni là add, actions[add] là funcion 
    return state
}
// xem lại đoạn ni phút 34
// cách 2:
// export default function reducer(state=init, action,args){
//     switch(action){
//         case "add":
//             const [title]=args;//chỗ ni hơi?
//             return {
//                 ...args,//chỗ ni nữa
//                 todos:[...state.todos,{
//                     title,
//                     completed:false
//                 }]
//             }
//             // đoạn ni : ...args: state ban đầu
//             // state nhiều, ta . đến phần todos , phần todos ni cần thêm phần tử {mới title}
//         default:
//             return state

// }
// }