// 1.- librerias
import { useNavigate } from 'react-router-dom';

// 2.- components
import Form from "../../../layauts/form/Form";
import TextField from "../../../layauts/textField/TextField";
import Button from "../../../layauts/button/Button";
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Container } from '../styled';

// 4.- interfaces
import { HandleSubmit, HandleChange } from "../../../hooks/hookForm/interface";
import { Model, RequeridFields } from "../container/ResetPassword";

// 5.- iconos
import { BsArrowLeftShort } from "react-icons/bs";

// 6.- imagenes
import imgLogo from '../../../assets/img/logo.png';
import imgLoading from '../../../assets/img/no-image.jpg';

interface Props {
    handleSubmit: HandleSubmit<Model>;
    handleChange: HandleChange<Model>;
    onSubmit: (v: object) => Promise<void>;
    form: Model;
    setForm: (v: Model) => void;
    errors: RequeridFields[];
}

const ResetPasswordPage = ({ handleSubmit, handleChange, onSubmit, form, setForm, errors }: Props): JSX.Element => {

    const history = useNavigate();

    return <Container
        className="w-100 px-sm-2 px-md-4 d-flex flex-column align-items-center justify-content-center"
    >
        <div className="w-100 text-right mb-5">
            <BsArrowLeftShort 
                size={40}
                className="pointer"
                onClick={() => history('/login')}
            />
        </div>

        <div className='container-img-reset-password'>
            <FadeImage
                placeholder={imgLoading}
                img={imgLogo}
                alt="imgLogo"
                className="img-reset-password"
            />
        </div>

        <Form
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            className="w-100 w-sm-100 w-lg-75 w-xxl-50 px-4 py-0 p-sm-4 mt-5"
        >
            <TextField
                type='email'
                name="email"
                handleChange={e => handleChange(e, setForm, form)}
                isError={errors.includes('email')}
                helperText={errors.includes('email') ? "Email requerido" : ''}
                colorHelperText="#D32F2F"
                value={form.email}
                classes="my-3"
                isFull={true}
                placeholder="Email"
            />

            <div className="w-100 d-flex justify-content-center mt-4">
                <Button
                    type="submit"
                    fullWidth={true}
                    color="rgb(255, 217, 112)"
                    classes="btn"
                >Solicitar nueva contraseña</Button>
            </div>
        </Form>
    </Container>;
}

export default ResetPasswordPage;