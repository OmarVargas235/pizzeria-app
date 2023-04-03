// 1.- librerias
import { useNavigate } from "react-router-dom";

// 2.- components
import Card from "../container/Card";
import CardPizzaPage from "../components/CardPizzaPage";
import { Container, ListView } from '../styled';

// 3.- iconos
import { BsArrowLeftShort } from "react-icons/bs";

const DetailPage = (): JSX.Element => {

    const history = useNavigate();

    return <Container className="w-100 mt-5 mt-sm-0">
        <div className="d-flex flex-column align-items-center">
            <div className="w-100 text-right">
                <BsArrowLeftShort 
                    size={40}
                    className="pointer"
                    onClick={() => history('home')}
                />
            </div>

            <Card />

            <ListView className="row mt-4 w-100">
                {
                    [1, 2, 3].map(v => (
                        <CardPizzaPage
                            key={v}
                        />
                    ))
                }
            </ListView>
        </div>
    </Container>;
}

export default DetailPage;