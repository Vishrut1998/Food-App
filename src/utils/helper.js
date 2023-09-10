
export function filterData(searchTxt, filteredResturants){
    
    const filterData = filteredResturants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return filterData;
    
}

