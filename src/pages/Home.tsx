import React from "react";
import Button from '@mui/material/Button';

const Home = () => {
    console.log(window.location.href)
    return <div className="home">
        <h1>Amy Corson</h1>
        <Button>mui</Button>
    </div>
}

export default Home;