import { queryOptions } from "@tanstack/react-query";
import { profileRequest } from "../model/profile/service";

export const profileQuery = queryOptions({
    queryKey: ["profile"],
    queryFn: profileRequest,
    staleTime: Infinity,
});
