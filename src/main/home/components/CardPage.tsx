// 1.- librerias

// 2.- componets
import FadeImage from '../../../layauts/fadeImage/FadeImage';
import { Text } from '../../../layauts/Text';
import { Card, ContainerImg, FooterCard } from '../styled';

// 3.- imagenes

import imgLoading from '../../../assets/img/no-image.jpg';

const CardPage = (): JSX.Element => {

    // return <Card className='col-6 pl-0 mb-4'>
    return <Card className='col-10 col-md-6 col-xl-4 pl-0 mb-4 pointer'>
        <ContainerImg>
            <FadeImage
                placeholder={imgLoading}
                img={"https://thumbs.dreamstime.com/b/camino-vac%C3%ADo-y-paisaje-despu%C3%A9s-de-la-tormenta-pesada-55721383.jpg"}
                alt="imgPizza"
                className=""
            />
        </ContainerImg>

        <FooterCard className='text-center'>
            <Text
                color='#827E81'
                weight='600'
            >Panos Pizza</Text>

            <Text
                size='15px'
            >Calle 1 #2-3</Text>
        </FooterCard>
    </Card>;
}

export default CardPage;