import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForm = ({ submit}) => {
    const [formulario, handleChange, reset] = useFormulario({
        name:'',
        email:'',
        lasname:'',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label='Nombre' 
                name='name' 
                value={formulario.name} 
                onChange={handleChange} 
                placeholder='Nombre'
            />
            <Input 
                label='Apellido' 
                name='lasname' 
                value={formulario.lasname} 
                onChange={handleChange} 
                placeholder='Apellido'
            />
            <Input
                label='Correo' 
                name='email' 
                value={formulario.email} 
                onChange={handleChange}
                placeholder='Correo' 
            />
            <Button>Enaviar</Button>
        </form>
    )
}

export default UserForm;