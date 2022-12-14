import { Button } from "react-bootstrap";
import { Provider } from "react-redux";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { rtkStoreList } from "../../storeRTK/store";
import AllList from "../component/AllList";
import FormList from "../component/FormList";
import ViewList from "../component/ViewList";

function AllRoutsRTK() {
    return (
        <>
            <Provider store={rtkStoreList}>
                <Routes>
                    <Route path="/" element={<Navigate to="/lists" />} />
                    <Route path="/lists" element={<AllList />} />
                    <Route path="/list/edit/:id" element={<FormList type={{ name: "Update", color: "btn-info" }} />} />
                    <Route path="/list/add" element={<FormList type={{name:"Add-Contact",color:"btn-success"}}/>} />
                    <Route path="/list/view/:id" element={<ViewList />} />
                </Routes>
            </Provider>

        </>
    )
}
export default AllRoutsRTK