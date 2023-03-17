import { Fragment } from 'react';//chỉ để chứa chứ ko sinh ra thẻ thật
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { publicRoutes  } from './routes';
import {DefaultLayout} from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // const Layout = route.layout ===null ? Fragment : DefaultLayout;//nếu ko có layout dc setting thì lấy defalutLayout
            const Page =route.component;//muốn sử dụng được biến trong jsx phải viết hoa chữ cái đầu tên biến

            let Layout = DefaultLayout
            
            if(route.layout){
              Layout = route.layout
            }else if(route.layout===null){
              Layout = Fragment
            }

            return <Route 
              key={index} 
              path={route.path} 
              element={
                <Layout>
                  <Page/>
                </Layout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
