type Operation = {
  name: string;
  tool: string;
};

type Project = {
  name: string;
  operations: Operation[];
};

interface SideNavProp {
  projects: Project[];
  setSelectedProject: (index: number) => void;
  selectedProject: number;
  setModal: () => void;
}

const SideNav = ({ projects, setSelectedProject, selectedProject, setModal }: SideNavProp) => {
  return (
    <nav className="sidenav-container">
      <h1>ReactJs Test</h1>
      <div>
        <ul className="projects">
          {projects.map((project: Project, idx: number) => (
            <li key={idx} onClick={() => setSelectedProject(idx)} className={`${selectedProject === idx ? "active-project" : null}`}>
              {project.name}
            </li>
          ))}
        </ul>
        <button className="mt-40" onClick={setModal}>Create new</button>
      </div>
    </nav>
  );
};

export default SideNav;
