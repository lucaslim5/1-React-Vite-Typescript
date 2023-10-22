import { Alert, AlertHeading } from "react-bootstrap"
//Se especifica los props y el tipo d dato q el hijo puede recibir
type AlertGeneratorProps={
    message:string;
}
const AlertGenerator = ({message}:AlertGeneratorProps) => {

  return (
    <Alert>
        <AlertHeading> Mensaje recibido</AlertHeading>
        <p>
            {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator