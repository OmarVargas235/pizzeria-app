// 1.- libraries
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// 2.- model
import { pizzeriasQuery } from "../..//model/query";

export const usePizzerias = () => {
    const [search, setSearch] = useState("");

    const { isPending, data, isError } = useQuery(
        pizzeriasQuery({
            page: 1,
            limit: 10,
        }),
    );
    const stores = data?.data.data ?? [];

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    return { search, handleSearch, stores, isPending, isError };
};
