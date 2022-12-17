
// Thư viện có 2 thành phần chính view-html và createStore , còn reducer khi ta dùng thì ta tự viết
// function html để viết template view
export default function html([first,...strings],...values){
    return values.reduce((acc,cur)=>acc.concat(cur,strings.shift())
    ,[first])
    .filter(x=> x && x!==true||x===0)
    .join('')
    }
    // phần store để lấy dữ liệu cho view
    
    export function createStore(reducer){
        // nhận đối số là callback
        // dữ liệu trong store là state
        let state=reducer()
        // dùng DOM lấy root element để lưu và roots
        // lấy component tương ứng để lưu vào roots ni ??? 
        //  compontent là những thành phần chứa view thôi 
        const roots=new Map()
        // roots ni chứa những gốc element để ta render ra view
        // new Map ni có tính chất lặp qua và đặc điểm key có thể là các kiểu dữ liệu khác , các object bình thường khác key chỉ được là string
        function render(){
        //  hàm ni lặp qua roots để render ra view 
        for (const [root,component] of roots){
            // lấy ra html từ component return ra
            const html_component=component()
            root.innerHTML=html_component 
            // html được đẩy vào root
        }
        }
        // Viết các phương thức để làm việc với store
        // attach : hàm attach khi được gọi nó sẽ nhận từng html_component  đẩy qua root tương ứng và render lên view
        // component ở đây là dunction callback được gọi lại và return ra html_component sẽ được gọi khi render
        return{
            attach(component,root){
                // roots ở trên dùng Map nên ở dưới dùng phương thức set
                // object thường dùng roots:{root:component}
               roots.set(root,component)
                // khi set xong thì roots sẽ có dữ liệu và render để hiển thị lên giao diện
                render()
            }, 
            // connect: khi store và view nằm ở xa nhau nên cần 1 phương thức để kết nối
            // view có rất nhiều element mà đôi khi chỉ cần lấy vài dữ liệu của store nên truyền vào seclector cần hiển thị ở view
            // seclector=state=>state : là 1 callback để lựa chọn dữ liệu cụ thể ở store
            // khi truyền đối số là seclector , nếu không truyền lấy mặc định là state
             connect(seclector=state=>state){
            return component=>(prop,...agrs)=>component(Object.assign({},prop,seclector(state),...agrs)) 
             },
           //prop: những công cụ được truyền vào component 
           //tất cả các đối số prop, agrs,state đều có thể là object, nên dùng object.asigns để đưa hết các đối số ni vào 1 object
        
             dispatch(action,...agrs){
                state=reducer(state,action,agrs)
                //xử lý việc gì đó và trả về state mới
                render()
            }
         }
    }
     
    //xong thư viện
    // tạo ra 2 file
    // store.js chứa state
    // reducer.js là file nhận action và xử lý reducer
    // 
    
    
    
    