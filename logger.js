export default function logger(reducer){
    return (prevState, action, args)=>{
        console.group(action)
        console.log("prevState", prevState)
        console.log("action args", args)

        const nextState= reducer(prevState, action, args) 
         console.log("nextstate",nextState)
         console.groupEnd(action)
        return nextState
    }
}
// Bình thường chưa chạy là underfined
// Khi ứng dụng chạy thì sẽ get default state là init
