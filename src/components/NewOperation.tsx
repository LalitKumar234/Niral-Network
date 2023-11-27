import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

interface NewOperationType{
    isOpen: boolean,
    setIsOpen: (open: boolean) => void;
    handleNewOperation: (name: string, tool: string) => void
}

const NewOperation = ({ isOpen, setIsOpen, handleNewOperation }: NewOperationType) => {
    const allTools = ['Tool D-2', 'Tool D-4', 'Tool D-6', 'Tool D-8', 'Tool D-10']
    const [tool, setTool] = useState('')
    const [name, setName] = useState<string>('')

    console.log(tool)

    return (
        <div className='new-operation-container'
            style={{
                visibility: isOpen ? 'visible' : 'hidden',
                transform: isOpen ? 'translate(0px, 0px)' : 'translate(20rem, 0rem)'
            }}
        >
            <div className="operation-close-button" onClick={() => setIsOpen(false)}>
                <IoMdClose size={25} />
            </div>
            <div className='add-new-operation'>
                <p>Add New Opeartion</p>
                <input
                    type="text"
                    placeholder='Enter operation name'
                    className='mt-40'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <div className='drop-down'>
                    <span>Select tool</span>
                    <ul className='drop-down-items'>
                        {
                            allTools.map((data, idx) =>
                                <li
                                    key={idx}
                                    onClick={() => setTool(data)}
                                    className={`${tool === data ? "active-tool" : null}`}>{data}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <button className='mt-40' onClick={() => handleNewOperation(name, tool)}>Add</button>
            </div>
        </div>
    )
}

export default NewOperation