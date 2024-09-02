import React from 'react';

const Firstd1p2 = () => {
    const display = () => {
        alert("Check the console output!");
        let age = 18;
        let name = 'Kiran';
        let setStatus = false;
        let userDefault = undefined;
        let responseValue = null;
        
        let oldage=age;
            oldage=25;
        let status = setStatus;
            status=true;
            
        console.log(oldage);
        console.log(name);
        console.log(status);
        console.log(userDefault);
        console.log(responseValue);
    };
    
    return (
        <>
            <button onClick={display}>Click me!</button>
        </>
    );
};

export default Firstd1p2;