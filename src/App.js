
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontendRoutes from './loginDashbord/FrontendRoutes';
import AllRoutsRTK from './MainRTKQueryPrac/routs/AllRoutsRTK';
import AComp from './newPrac/AComp';
function App() {
  return (
    <div className="App">
      {/* <AllRoutsRTK /> */}
      {/* <FrontendRoutes /> */}
      <AComp data={"abc"}/>
    </div>
  );
}

export default App;
