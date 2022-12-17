import { createStore } from "./core_todo.js";
import reducer  from "./reducer.js";
import withLogger from "./logger.js"


const {attach, connect,dispatch} = createStore(withLogger(reducer)) 
// hàm withLogger phải return ra state như reducer return

window.dispatch=dispatch

export {attach,connect}
