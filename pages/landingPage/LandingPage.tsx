import Topbar from "./components/topbar"
import Navbar from "./components/navbar"
import Sale from "./components/sale"
import Runner from "./components/runner"
import Client from "./components/client"
import Benifits from "./components/benifits"
import Events from "./components/events"
import Course from "./components/course"
import Stying from "./components/stying"
import Endlinks from "./components/endlinks"
import Template from "./components/template"
import { Links } from "react-router-dom"
const LandingPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Sale />
            <Runner />
            <Client />
            <Benifits />
            <Events />
            <Course />
            <Stying />
            <Endlinks />
            {/* <Template /> */}
        </>
    )
}

export default LandingPage
