import { useMemo } from "react";

export const usePagination = (totalPages) => {
    let pagesArray = useMemo(() => {
        let tempPagesArray = [];
        for (let index = 0; index < totalPages; index++) {
            tempPagesArray.push(index+1);
        }
        return tempPagesArray;
    }, [totalPages]);
    return pagesArray;
}