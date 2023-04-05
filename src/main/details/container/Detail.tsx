// 1.- librerias
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// 2.- components
import DetailPage from "../components/DetailPage";

// 3.- services
import { store } from '../../../services/stores';

// 4.- redux
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 5.- utils
import { alert } from '../../../helpers/utils';

// 6.- interfaces
import { StoreDetail } from '../../../helpers/interface';

const Detail = (): JSX.Element => {

    const dispatch = useDispatch();

    const params = useParams();

    const [detail, setDetail] = useState<StoreDetail>({
        pizzeria: { description: '', direction: '', logo: '', title: '' },
        pizzerias: []
    });

    useEffect(() => {

        async function callAPI(): Promise<void> {

            dispatch(setIsActiveLoading(true));
            
            const result = await store.getStore(Number(params.id));

            dispatch(setIsActiveLoading(false));

            if (result.status !== 200 || result.data === null) return alert({ dispatch, isAlertSuccess: false, message: result.message });

            setDetail(result.data);
        }

        void callAPI();

    }, []);

    return <DetailPage
        detail={detail}
    />;
}

export default Detail;