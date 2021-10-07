import { useState, useEffect } from 'react'
import TaskCards from '@elements/taskcards'
import Modal from '@elements/modal'
import tasks from '../../tasksList'
import { v4 as uuid } from 'uuid';
import {
    Wrapper,
    Hr,
    Heading,
    GroupsDiv,
    GroupHeader,
    GroupColumn,
    AddButton,
    Input,
    Select,
    RowDiv,
    FlexDiv
} from '../styles/HomeStyles'


const Home = () => {
    const [taskRecords, setTaskRecords] = useState(JSON.parse(localStorage.getItem("Tasks")) || tasks)
    const [showNewGroupInput, setShowNewGroupInput] = useState(false)
    const [newGroup, setNewGroup] = useState('')
    const [groups, setGroups] = useState(JSON.parse(localStorage.getItem("Groups")) || ['No Status', 'Not Started', 'In progress'])
    const [showTasksModal, setShowTasksModal] = useState(false)
    const [newTasks, setNewTasks] = useState({
        id: uuid(),
        title: '',
        description: '',
        status: groups[0]
    })

    useEffect(() => {
        localStorage.setItem("Groups", JSON.stringify(groups))
        localStorage.setItem("Tasks", JSON.stringify(taskRecords))
    }, [taskRecords, groups])

    const drop = (e, group) => {
        e.preventDefault();
        let droppedTask = JSON.parse(e.dataTransfer.getData("task"));
        console.log({ group, tasks, droppedTask })
        let dummyTasks = taskRecords.filter(task => task.id !== droppedTask.id)
        droppedTask = { ...droppedTask, status: group }
        setTaskRecords([...dummyTasks, droppedTask])
    }

    return (
        <Wrapper>
            <Heading>TASK BOARD</Heading>
            <Hr />
            <GroupsDiv>
                {groups.map((eachGroup, i) =>
                    <GroupColumn
                        key={i}
                        group={eachGroup}
                        onDrop={(e) => drop(e, eachGroup)}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <GroupHeader>
                            <div>{eachGroup} -  {taskRecords.filter((obj) => obj.status === eachGroup).length}</div>
                            <button onClick={() => setShowTasksModal(true)}>+</button>
                        </GroupHeader>
                        <div>
                            {taskRecords.map((eachTask, i) =>
                                eachGroup === eachTask.status &&
                                <TaskCards key={i} task={eachTask} groups={groups} taskRecords={taskRecords} setTaskRecords={setTaskRecords} />)}
                        </div>
                    </GroupColumn>
                )}
                <FlexDiv>
                    <br />
                    <AddButton onClick={() => setShowNewGroupInput(prevState => !prevState)}>
                        + Add a new group
                    </AddButton>
                    {showNewGroupInput && <RowDiv>
                        <Input type='text'
                            onChange={(e) => setNewGroup(e.currentTarget.value)}
                            value={newGroup}
                            placeholder='New Group Heading' />
                        <AddButton onClick={() => {
                            setGroups([...groups, newGroup]);
                            setNewGroup('')
                        }}
                            disabled={newGroup === ''}>+</AddButton>
                    </RowDiv>}
                </FlexDiv>
            </GroupsDiv>
            <Modal visible={showTasksModal} setVisible={setShowTasksModal} title="Create new Task">
                <Input type='number'
                    onChange={(e) => setNewTasks({ ...newTasks, id: e.currentTarget.value })}
                    value={newTasks.id}
                    placeholder='New Task Id'
                    style={{ display: 'none' }}
                />
                <Input type='text'
                    onChange={(e) => setNewTasks({ ...newTasks, title: e.currentTarget.value })}
                    value={newTasks.title}
                    placeholder='New Task Title'
                />
                <Input type='text'
                    onChange={(e) => setNewTasks({ ...newTasks, description: e.currentTarget.value })}
                    value={newTasks.description}
                    placeholder='New Task Description'
                />
                <Select onChange={(e) => setNewTasks({ ...newTasks, status: e.currentTarget.value })} >
                    {groups.map((group, i) => <option key={i} value={group}>{group}</option>
                    )}
                </Select>
                <AddButton onClick={() => {
                    setNewTasks({ ...newTasks })
                    setTaskRecords([...taskRecords, newTasks]);
                    setNewTasks({
                        title: '',
                        description: '',
                        status: groups[0]
                    })
                    setShowTasksModal(false)
                }}
                    disabled={newTasks.title === '' || newTasks.description === ''}
                >Add Task</AddButton>
            </Modal>
        </Wrapper >
    )
}

export default Home
