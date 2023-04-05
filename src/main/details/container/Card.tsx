
// 2.- components
import CardPage from "../components/CardPage";

// 4.- interfaces
import { StoreDetail } from '../../../helpers/interface';

type Props = Omit<StoreDetail, 'pizzerias'>;

const Card = ({ pizzeria }: Props): JSX.Element => {

    return <CardPage
        pizzeria={pizzeria}
    />;
}

export default Card;