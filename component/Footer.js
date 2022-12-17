import html from "../core_todo.js";
import { connect } from "../store.js";
const connector = connect()
 export function Footer({todos,filters,filter}){
     return html`
	 <footer class="footer">
	 <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
	 <ul class="filters">
	 ${Object.keys(filters).map(type=>html`

	     <li>
			 <a class="${filter===type && 'selected'}" 
			 href="#/"
			 onclick="dispatch('switchFilter','${type}')">
			 ${type[0].toUpperCase()+type.slice(1)}
			 </a>
		 </li>

	 `)}
	 </ul>
	 <button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>
     </footer>`
      }

 export default connector(Footer)
//  Object.keys(filters)__chỉ lọc qua key của object (filters ) thôi