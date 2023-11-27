import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import NewOperation from "./components/NewOperation";
import NewProjectModal from "./components/NewProjectModal";

interface Operation {
  name: string,
  tool: string
}

function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      operations: [
        { name: "Operation 1", tool: "Tool D-4" },
        { name: "Operation 2", tool: "Tool D-3" },
      ],
    },
    {
      name: "Project 2",
      operations: [
        { name: "Operation 1", tool: "Tool D-4" },
        { name: "Operation 2", tool: "Tool D-3" },
        { name: "Operation 3", tool: "Tool D-2" },
      ],
    },
    {
      name: "Project 3",
      operations: [
        { name: "Operation 1", tool: "Tool D-4" },
        { name: "Operation 2", tool: "Tool D-3" },
        { name: "Operation 3", tool: "Tool D-2" },
        { name: "Operation 4", tool: "Tool D-1" },
      ],
    },
  ]);

  const handleCreateProject = (projectName: string) => {
    setProjects([...projects, {
      name: projectName,
      operations: [],
    }])
    setModal(false)
  }

  const addOperationToProject = (index: number, newOperation: Operation) => {
    const updatedProjects = [...projects];
    const projectOperations = [...updatedProjects[index].operations];
    projectOperations.push(newOperation);
    updatedProjects[index].operations = projectOperations;
    setProjects(updatedProjects);
  }

  const handleNewOperation = (name: string, tool: string) => {
    const newOperation = { name, tool };
    addOperationToProject(selectedProject, newOperation);
  }

  const handleDeleteOperation = (idx: number) => {
    const updatedProjects = [...projects];
    const projectOperations = [...updatedProjects[selectedProject].operations];
    projectOperations.splice(idx, 1);
    updatedProjects[selectedProject].operations = projectOperations;
    setProjects(updatedProjects);
  }



  return (
    <>
      {
        modal && <NewProjectModal
          handleCreateProject={handleCreateProject} closeModal={()=>setModal(false)}/>
      }

      <NewOperation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNewOperation={handleNewOperation}
      />
      <TopNav />
      <SideNav
        projects={projects}
        setSelectedProject={setSelectedProject}
        selectedProject={selectedProject}
        setModal={() => setModal(!modal)}
      />
      <Main
        operations={projects[selectedProject].operations}
        projectName={projects[selectedProject].name}
        setIsOpen={() => setIsOpen(!isOpen)}
        handleDeleteOperation={handleDeleteOperation}
      />
    </>
  );
}

export default App;
