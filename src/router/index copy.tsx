// 组件形式的写法
import Home from "@/views/Home";
import About from "@/views/About";
import App from "@/App";
 import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
// 两种路由模式的组件： BrowserRouter(History模式), HashRouter（hash模式）
/*
 *  const baseRouter = () => {
  return ()
 }
 */
// 以上可以简写为
const baseRouter = () =>(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/*Navigate 用户路由重定向  */}
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
)
export default baseRouter