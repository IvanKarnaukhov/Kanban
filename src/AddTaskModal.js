import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Row, Col} from 'reactstrap'

function AddTaskModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('todo')

    const closeModel = () => {
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle('')
    }

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new Task </ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <Row>
                        <Col>
                            <Label>Priority</Label>
                            <Input type="select" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                                <option value={0}>Low</option>
                                <option value={1}>Med</option>
                                <option value={2}>High</option>
                            </Input>
                        </Col>
                        <Col>
                            <Label>Status</Label>
                            <Input type="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                                <option value={'todo'}>Todo</option>
                                <option value={'progress'}>Progress</option>
                                <option value={'review'}>Review</option>
                                <option value={'done'}>Done</option>
                            </Input>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeModel}> Add new Task</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddTaskModal;
