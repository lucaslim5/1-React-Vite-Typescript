import { ProgressBar } from "react-bootstrap"

//Se especifica los props y el tipo d dato q el hijo puede recibir
type DangerBarProps={
    value:number;
}
//el hijo tiene "Args" del tipo "DangerBaProps"
const DangerBar = ({value}:DangerBarProps) => {
    //logica segun el valor recibido del padre, se mostrara de un color diferente
    const getVariant=(value:number)=>{
        if (value<30) {
            return 'sucess';
        } else if (value<60) {
            return 'warning';
        } else {
            return 'danger';
        }
    }
  return (
    <ProgressBar animated now={value} variant={getVariant(value)}/>
  )
}

export default DangerBar