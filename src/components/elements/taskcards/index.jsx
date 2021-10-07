import { useState } from 'react'
import styled from 'styled-components'
import Modal from '@elements/modal'
import { Input, Select } from '@styles/HomeStyles'

const Tile = styled.div`
    padding: .2rem .5rem;
    margin: .8rem 0;
    color: #000;
    cursor: grab;
    border-radius: 4px;
    border: 1px solid #c8c9cc;
    box-shadow: 0 6px 18px rgb(0 0 0 / 6%);
`;

const Button = styled.button`
    padding: .2rem .5rem;
    background: red;
    color: #fff;
`

const TaskCards = ({ task, groups, taskRecords, setTaskRecords }) => {
    const [showTaskModal, setShowTasksModal] = useState(false)
    const index = taskRecords.findIndex((obj => obj.id === task.id));

    const drag = (e, task) => {
        e.dataTransfer.setData("task", JSON.stringify(task));
    }

    const editTask = (id) => (e) => {
        let dummyTaskRecords = [...taskRecords];
        dummyTaskRecords[id][e.target.name] = e.target.value
        setTaskRecords(dummyTaskRecords)
    }

    const deleteTask = (id) => {
        setShowTasksModal(false)
        setTaskRecords(taskRecords.filter(task => task.id !== id))
    }

    return <>
        <Tile onClick={() => setShowTasksModal(true)} onDragStart={(e) => drag(e, task)} draggable="true">{task.title}</Tile>
        <Modal visible={showTaskModal} setVisible={setShowTasksModal} title="Task Details">
            <Input type='text'
                name="title"
                onChange={editTask(index)}
                value={taskRecords[index].title}
            />
            <Input type='text'
                name="description"
                onChange={editTask(index)}
                value={taskRecords[index].description}
            />
            <Select onChange={editTask(index)} name='status' defaultValue={taskRecords[index].status}>
                {groups.map((group, i) => <option key={i} >{group}</option>)}
            </Select>
            <Button onClick={() => deleteTask(task.id)}>DELETE THIS CARD</Button>
        </Modal>
    </>
}

export default TaskCards
