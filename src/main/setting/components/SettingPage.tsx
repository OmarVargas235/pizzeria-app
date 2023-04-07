// 1.- librerias
import { useNavigate } from 'react-router-dom';

// 2.- components
import { Container, ContainerFile, ContainerImage } from "../styled";
import FadeImage from '../../../layauts/fadeImage/FadeImage';
import { Text } from '../../../layauts/Text';
import Modal from '../../../layauts/modal/Modal';
import Button from '../../../layauts/button/Button';
import TextField from '../../../layauts/textField/TextField';
import TextFieldUpload from '../../../layauts/textFieldUpload/TextFieldUpload';
import Form from '../../../layauts/form/Form';
import Avatar from "../../../layauts/Avatar";

// 3.- iconos
import { BsArrowLeftShort } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCloudUpload } from 'react-icons/ai';

// 4.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 5.- interfaces
import { Model } from '../container/Setting';
import { HandleChange, HandleSubmit } from '../../../hooks/hookForm/interface';
import { User } from '../../../helpers/interface';

interface Props {
    isOpenModal: boolean;
    setIsOpenModal: (v: boolean) => void;
    handleChange: HandleChange<Model>;
    handleChangeFile: HandleChange<Model>;
    handleSubmit: HandleSubmit<Model>;
    onSubmit: (v: object) => Promise<void>;
    form: Model;
    setForm: (v: Model) => void;
    user: User;
    imagePreview: string | ArrayBuffer | null;
    isDark: boolean;
}

const VITE_BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const SettingPage = ({ isOpenModal, setIsOpenModal, handleChange, handleChangeFile, handleSubmit, onSubmit, form, setForm, user, imagePreview, isDark }: Props): JSX.Element => {

    const history = useNavigate();

    return <>
        <Container className='pb-4' isDark={isDark}>
            <div className="w-100 p-2">
                <BsArrowLeftShort 
                    size={40}
                    className="pointer"
                    onClick={() => history('/login')}
                />
            </div>

            <ContainerImage className='d-flex justify-content-center'>
                {
                    user.img === null
                    ? <Avatar
                        height='96px'
                        width='96px'
                        className="pointer avatar"
                    >
                        {user.name.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}
                    </Avatar>
                    : <FadeImage
                        placeholder={imgLoading}
                        img={`${VITE_BACKEND_URL}/${user.img}`}
                        alt="profile"
                        classNameContainer='image-profile'
                    />
                }

                <MdModeEditOutline
                    size={25}
                    color='black'
                    className='pointer'
                    onClick={() => setIsOpenModal(true)}
                />
            </ContainerImage>

            <Text
                size='25px'
                weight='bold'
                className='text-center mt-4'
            >{user.name} {user.lastName}</Text>

            <Text
                color='#5A585E'
                className='text-center'
            >{user.email}</Text>
        </Container>

        <Modal
            closeModal={(v) => setIsOpenModal(v)}
            open={isOpenModal}
            textBtn=''
            isButton={false}
            className='container-modal'
        >   
            {
                imagePreview === null || imagePreview === '' ? <></>
                : <ContainerImage
                    className='d-flex justify-content-center w-100 mb-3'
                >
                    <div
                        style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden' }}
                    >
                        <FadeImage
                            placeholder={imgLoading}
                            img={imagePreview as string}
                            alt="profile"
                        />
                    </div>
                </ContainerImage>
            }

            <Form
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
                <ContainerFile className='mb-2'>
                    <TextFieldUpload
                        name="file"
                        handleChangeFile={e => handleChangeFile(e, setForm, form)}
                        classes='input'
                    />

                   <div className='upload d-flex justify-content-center align-items-center pointer'>
                        <AiOutlineCloudUpload size={60}/>
                    </div>
                </ContainerFile>

                <TextField
                    name="name"
                    handleChange={e => handleChange(e, setForm, form)}
                    value={form.name}
                    classes="mb-3"
                    label="Nombre"
                />

                <TextField
                    label="Apellido"
                    name="lastName"
                    handleChange={e => handleChange(e, setForm, form)}
                    value={form.lastName}
                    classes="mb-4"
                />
                
                <div className='d-flex justify-content-center'>
                    <Button
                        classes='mr-2'
                        color='#FFD970'
                        type='submit'
                    >Aceptar</Button>
                    
                    <Button color='#dc3545' dataClose='close'>Cerrar Modal</Button>
                </div>
            </Form>
        </Modal>
    </>;
}

export default SettingPage;