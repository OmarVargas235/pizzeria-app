// 1.- librerias

// 2.- componets
import Avatar from "../../../layauts/Avatar";
import { Header } from "../styled";

const HeaderPage = (): JSX.Element => {

    return <Header className="w-100 d-flex justify-content-end mb-5">
        <Avatar className="pointer">OV</Avatar>
    </Header>;
}

export default HeaderPage;