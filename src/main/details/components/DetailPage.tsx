// 1.- librerias
import { useNavigate } from "react-router-dom";

// 2.- components
import Card from "../container/Card";
import CardPizzaPage from "../components/CardPizzaPage";
import { Container, ListView } from '../styled';

// 3.- iconos
import { BsArrowLeftShort } from "react-icons/bs";

// 4.- interfaces
import { StoreDetail } from '../../../helpers/interface';

interface Props {
    detail: StoreDetail;
}

const DetailPage = ({ detail }: Props): JSX.Element => {

    const history = useNavigate();

    return <Container className="w-100 mt-5 mt-sm-0">
        <div className="d-flex flex-column align-items-center">
            <div className="w-100 text-right">
                <BsArrowLeftShort 
                    size={40}
                    className="pointer"
                    onClick={() => history('/home')}
                />
            </div>

            <Card
                pizzeria={detail.pizzeria}
            />

            <ListView className="row mt-4 w-100">
                {
                    detail.pizzerias.map(v => (
                        <CardPizzaPage
                            key={v.id}
                            data={v}
                        />
                    ))
                }
            </ListView>
        </div>
    </Container>;
}

export default DetailPage;