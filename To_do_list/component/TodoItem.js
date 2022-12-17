import html from "../core_todo.js";
import { connect } from "../store.js";
const connector = connect()
 export function TodoItem({todo,index,editIndex}){
     return html`
		<li class="${todo.completed && 'completed'} ${editIndex===index && 'editing'}">
			<div class="view">
				<input class="toggle"
				 type="checkbox" 
				 ${todo.completed && 'checked'}
				 onchange="dispatch('toggle',${index})"
				 >
				<label onclick="dispatch('startEdit',${index})">${todo.title}</label>
				<button 
				class="destroy"
				onclick=" dispatch('destroy',${index})"
				></button>
			</div>
			<input 
			class="edit"
			value="${todo.title}"
			onkeyup="event.keyCode ===13 && dispatch('editEnd',this.value.trim()) || event.keyCode ===27 && dispatch('cancelEdit')"
			onblur="dispatch('editEnd',this.value.trim())"
			>
		</li>
		`
 }
 export default connector(TodoItem)
//  khi click vào ô sẽ bắt sự kiện onchange, khi dispatch phải biết dispatch trên todos có index là gì  (index ni bên todolist qua)
// kiểm tra (vô element xem code trên devtool)
// xử lý khi onblur ra thì tự thoát edit