// 1.- librerias
import { useNavigate } from 'react-router-dom';

// // 2.- components
import Form from "../../../layauts/form/Form";
import TextField from "../../../layauts/textField/TextField";
import Button from "../../../layauts/button/Button";
import { Text } from "../../../layauts/Text";
import { Container } from '../styled';

// 4.- interfaces
import { HandleSubmit, HandleChange } from "../../../hooks/hookForm/interface";
import { Model, RequeridFields } from "../container/FormResetPassword";

// // 5.- iconos
import { BsArrowLeftShort } from "react-icons/bs";

// // 6.- imagenes
// import imgLogo from '../../../assets/img/logo.png';
// import imgLoading from '../../../assets/img/no-image.jpg';

interface Props {
    handleSubmit: HandleSubmit<Model>;
    handleChange: HandleChange<Model>;
    onSubmit: (v: object) => Promise<void>;
    form: Model;
    setForm: (v: Model) => void;
    errors: RequeridFields[];
}

const FormResetPasswordPage = ({ handleSubmit, handleChange, onSubmit, form, setForm, errors }: Props): JSX.Element => {

    const history = useNavigate();

    return <Container className="w-100 px-sm-2 px-md-4 d-flex flex-column align-items-center justify-content-center">
        <div className="w-100 text-right">
            <BsArrowLeftShort 
                size={40}
                className="pointer"
                onClick={() => history('/login')}
            />
        </div>

        <Text
            size="25px"
            weight="bold"
            className="mb-2"
        >Cambiar contraseña</Text>

        <Form
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            className="w-100 w-sm-100 w-lg-75 w-xxl-50 container-form p-4"
        >
            <TextField
                type='password'
                name="password"
                handleChange={e => handleChange(e, setForm, form)}
                isError={errors.includes('password')}
                helperText={errors.includes('password') ? "Contraseña requerido" : ''}
                colorHelperText="#D32F2F"
                value={form.password}
                classes="my-3 mb-4"
                isFull={true}
                placeholder="Contraseña"
            />

            <TextField
                type='password'
                name="repeatPassword"
                handleChange={e => handleChange(e, setForm, form)}
                isError={errors.includes('repeatPassword')}
                helperText={errors.includes('repeatPassword') ? "Campo requerido" : ''}
                colorHelperText="#D32F2F"
                value={form.repeatPassword}
                classes="my-3"
                isFull={true}
                placeholder="Repetir contraseña"
            />

            <div className="w-100 d-flex justify-content-center mt-4">
                <Button
                    type="submit"
                    fullWidth={true}
                    classes="btn"
                >Cambiar Contraseña</Button>
            </div>
        </Form>
    </Container>;
}

export default FormResetPasswordPage;