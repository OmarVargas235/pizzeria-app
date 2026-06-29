// 1.- libraries
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

// 2.- model
import { pizzeriasQuery } from "../../model/query";

export const usePizzerias = () => {
    const [search, setSearch] = useState("");

    const { isPending, data, isError } = useQuery(
        pizzeriasQuery({
            page: 1,
            limit: 10,
        }),
    );

    const allStores = useMemo(() => {
        return data?.data.data ?? [];
    }, [data?.data.data]);

    const stores = useMemo(() => {
        if (!search.trim()) {
            return allStores;
        }
        const value = search.toLowerCase().trim();
        return allStores.filter((store) => store.name.toLowerCase().includes(value));
    }, [allStores, search]);

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    return { search, handleSearch, stores, isPending, isError };
};
