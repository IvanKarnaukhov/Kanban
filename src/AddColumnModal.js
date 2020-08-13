import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Row, Col} from 'reactstrap'


function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState("")

    const closeModel = () => {
        props.addNewColumn(newTitle)
        setIsModalOpen(false)
        setNewTitle('')
    }


    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new Column </ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeModel}> Add new Column</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddColumnModal;
