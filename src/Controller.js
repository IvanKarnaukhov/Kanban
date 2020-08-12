import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input} from 'reactstrap'


function Controller(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState("")



    return (
        <>
            <Button onClick={() => setIsModalOpen(true) }>Add new Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new Task </ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=> props.addNewTask(newTitle)}> Add new Task</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;
