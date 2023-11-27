import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

interface Operation{
  name: string,
  tool: string
}

const Main = ({ operations, projectName, setIsOpen, handleDeleteOperation }: any) => {

  console.log(operations)
  return (
    <div className="main-container">
      <div className="projectName">{projectName}</div>
      <ul className="operations">
        {
          operations.map((operation: Operation, idx: number) => <li key={idx}>
            <div className="operation">{operation.name}</div>
            <div className="tool">{operation.tool}</div>
            <div className="close-button" onClick={()=>handleDeleteOperation(idx)}>
              <IoMdClose size={25} />
            </div>
          </li>)
        }
        <div className="add-button" onClick={setIsOpen}>
          <FiPlus size={30} />
        </div>
        <p className="new">New operation</p>
      </ul>
    </div>
  );
};

export default Main;
