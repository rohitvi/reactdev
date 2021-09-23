import React,{useState} from "react";
import App from './App.js';
function Form() {
    return (
        <>
        <App/>
        <form>
        <label>Username</label>
        <input type="text" />
        <h1></h1>
        <label>Password</label>
        <input type="password" />
        <input type="submit" value="submit"/>
        
        </form>
        <button >End</button>
        </>
    );
}

export default Form;