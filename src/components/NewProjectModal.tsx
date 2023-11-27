import { useState } from "react"
import { IoMdClose } from "react-icons/io"

interface NewProjectProp {
    handleCreateProject: (projectName: string) => void;
}

const NewProjectModal = ({ handleCreateProject }: NewProjectProp) => {
    const [projectName, setProjectName] = useState<string>('')
    return (
        <div className="project-modal-container">
            <div className="project-modal">
                <div className="flex">
                    <h2>Add new Project</h2>
                    <IoMdClose size={25} style={{ cursor: 'pointer' }} />
                </div>
                <div className="modal-body">
                    <input type="text" placeholder="Enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    <button onClick={() => handleCreateProject(projectName)}>Create</button>
                </div>

            </div>
        </div>
    )
}

export default NewProjectModal