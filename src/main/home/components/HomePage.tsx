// 1.- librerias

// 2.- componets
import TextField from "../../../layauts/textField/TextField";
import { Text } from "../../../layauts/Text";
import Header from "../container/Header";
import { Container, ListView } from '../styled';
import CardPage from "./CardPage";

// 3.- iconos
import { BiSearchAlt2 } from "react-icons/bi";


const HomePage = (): JSX.Element => {
    
    return <Container className="px-4 w-100">
        <Header />

        <div className="border-bottom text-center w-25 mb-2 mb-sm-4">
            <Text>Pizzerías</Text>
        </div>

        <Text
            size="30px"
            weight="bold"
        >Tiendas</Text>

        <Text className="mt-2 mb-3" color="#767276">Escoje tu pizzería favorita</Text>

        <TextField
            name="pizzeira"
            handleChange={() => {}}
            value="value"
            classes="w-100 w-sm-75 mb-4 mb-sm-5"
            placeholder="Buscar una pizzeíra"
            icon2={<BiSearchAlt2 size={25} color='#2F2C2D' className="mr-3" />}
            edge2="end"
        />

        <ListView className="row">
            {
                [1, 2, 3, 4].map(v => (
                    <CardPage
                        key={v}
                    />
                ))
            }
        </ListView>
    </Container>;
}

export default HomePage;