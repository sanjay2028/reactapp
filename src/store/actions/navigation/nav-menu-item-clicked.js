export const navInit = (items) =>{    
    return{
        type : 'NAVIGATION_INIT',
        items : items
    }
}

export const navMenuClicked = (item) =>{    
    return{
        type : 'ITEM_CLICKED',
        item : item
    }
}
