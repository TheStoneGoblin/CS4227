import React from 'react';
import NavBar from '../components/NavBar';
import Project from "../components/Project.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <NavBar showLogout={true}/>
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h2>Welcome to Your Project Dashboard</h2>
                        <p className="text-muted">You've successfully logged in to the RMS application.</p>
                    </div>
                </div>

                <div className="row">
                    <Project number={1} />
                    <Project number={2} />
                    <Project number={3} />
                    <Project number={4} />
                    <Project number={5} />
                    <Project number={6} />
                </div>
            </div>
        </div>
    );
};

export default Home;