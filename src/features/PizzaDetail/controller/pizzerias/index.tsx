// 1.- libraries
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

// 2.- model
import { pizzaDetailQuery } from "../../model/query";

const defaultStore = {
    id: "",
    name: "",
    imageUrl: "",
    address: "",
    description: "",
    pizzas: [],
};

export const usePizzaDetail = () => {
    const { pizzaId } = useParams({ strict: false });
    const { isPending, data, isError } = useQuery(pizzaDetailQuery({ id: pizzaId }));
    const store = data?.data ?? defaultStore;
    const isEmpty = store.pizzas.length === 0;
    return { isPending, store, isError, isEmpty };
};
