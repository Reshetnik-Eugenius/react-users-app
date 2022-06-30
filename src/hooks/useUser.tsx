import { useMemo } from "react";

export const useSortedUsers = (users: any, sort: any) => {
    const sortedUsers = useMemo(()=>{

        if(sort) {
            return [...users].sort((a:any,b:any)=>(a[sort].localeCompare(b[sort])));
        }
        return users;
    },[sort, users]);

    return sortedUsers;
}

export const useUsers = (users:any, sort:any, query:any) => {
    const sortedUsers = useSortedUsers(users, sort);

    const sortedAndSearchedUsers = useMemo(()=>{
        return sortedUsers.filter((user: { name: string; }) => user.name.toLowerCase().includes(query));
    },[query, sortedUsers])

    return sortedAndSearchedUsers;
}