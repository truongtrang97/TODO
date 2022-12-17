import html from "../core_todo.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";
const connector = connect()
 export function Todolist({todos,filters,filter}){
	 console.log(filters)
	// truyền vô props trả về object của init
	// dùng dustructuring để lấy value của object {key của object}
	
     return html`
		<section class="main">
			<input 
				id="toggle-all" 
				class="toggle-all" 
				type="checkbox"
				onchange="dispatch('toggleAll',this.checked)"
				${
					todos.every(filters.completed) && 'checked'
				}
			>
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			${todos.filter(filters[filter]).map((todo,index)=>TodoItem({todo,index}))}
			</ul>
		</section>`
      }

 export default connector(Todolist)

// check toggle all lắng nge sự kiện trên input --> onchange
// xác định được trạng thái là check hay không check___cách lấy được trạng thái check hay không ==> this.checked
// onchange= dispatch('sự kiện','lấy trạng thái checked hay không (true, false')
//  cái ni khi click vào bó sẽ check hết hoặc bỏ check hết

// 	onchange="dispatch('toggleAll',this.checked)

// viết trên thẻ input lỗi nó hiển thị label??
//  khi toggle all phải hiện thị trạng thái của thẻ input (nút check  sáng lên khi checked, tắt khi k checked all )
//  đoạn ni xử lý trên thẻ input
// todos.every(filters.completed) && 'checked' : đoạn ni filter.completed là 1 function trả về true ,