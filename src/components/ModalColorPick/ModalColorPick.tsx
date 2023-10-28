import { useState } from "react"
import { Button, FormControl, FormLabel, Modal, ModalTitle} from "react-bootstrap";

type MyModalProps={
    show: boolean;
    onHide: ()=> void;
    handleColorChange: (color: string)=> void;
}

const ModalColorPick = ({show, onHide, handleColorChange}:MyModalProps) => {
    //vars para guardar el valor sleccionado del formulario
    const[selectedColor, setSelectedColor]=useState('#FFF');
    const handleColorPickerChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedColor(event?.target.value)
    }
    //al clickear en aceptar, se pasa el color elegido a la fc q provien del comp padre
    //y se cierra el modal
    const handleAcceptClick=()=>{
        handleColorChange(selectedColor);
        onHide();
    }
  return (
    <Modal show={show} onHide={onHide} centered backdrop='static'>
        <Modal.Header closeButton>
            <ModalTitle> Cambiar color </ModalTitle>
        </Modal.Header>
        <Modal.Body>
            <FormLabel htmlFor="exampleColorInput"> Elije un color </FormLabel>
            <FormControl 
            type='color'
            id='exampleColorInput'
            defaultValue='#FFF'
            title='Elije tu color'
            onChange={handleColorPickerChange}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}> Cancelar </Button>
            <Button variant="primary" onClick={handleAcceptClick}> Aceptar </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalColorPick