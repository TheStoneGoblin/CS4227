interface ProjectProps {
    number: number;
}

function Project({ number }: ProjectProps) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h3 className="card-title">Project {number}</h3>
                    <p className="card-text">{"Lorem ipsum"}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;