// 1.- libraries
import { useQuery } from "@tanstack/react-query";

// 2.- queries
import { profileQuery } from "../queries/profile";

export const useProfile = () => useQuery(profileQuery);
