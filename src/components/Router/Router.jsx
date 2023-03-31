import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Contacts from "../../pages/Contacts/Contacts";
import Projects from "../../pages/Projects/Projects";


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    )
}


export default Routing;