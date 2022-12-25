import * as React from 'react';
import Button from '@mui/material/Button';


export const ButtonLoad = ({onClickSearch}) => {
    return <div style={{display:"flex", justifyContent:"center", margin:"15px"}}>
        <Button variant="outlined" onClick={onClickSearch}>
            Search
        </Button>
        </div>

} 