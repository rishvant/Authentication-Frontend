import Navbar from "./Navbar";

const Dashboard = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="dash">
                <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary flex items-center justify-center mt-32">
                    This is Dasboard!
                </h2>
            </div>
        </>
    )
}

export default Dashboard;