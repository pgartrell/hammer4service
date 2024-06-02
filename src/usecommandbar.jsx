// import React, { useEffect, useState } from "react";
import { init } from "commandbar";


init("6d555837");

export const useCommandBar = () => {
    const loggedInUserId = "12345"
    window.CommandBar.boot(loggedInUserId);

    // const [catFacts, setCatFacts] = React.useState({})

    // React.useEffect(() => {
    //         let query = `Teach me about cats`
    //         fetch(`https://catfact.ninja/fact?=${query}`)
    //         .then((response) => response.json())
    //         .then(data => setCatFacts({catFacts: data}))
    //         .catch(err => console.log(err))
    // }, )

    // window.CommandBar.addArgumentChoices("catFacts", [], {
    //     onInputChange: setCatFacts,
    //     });

        // window.CommandBar.addCallback(
        // "catFacts",
        // (args, context) => alert(`${args.fact}!`)
        // );


    // const catFacts = (query) => {
    //     return fetch(`https://catfact.ninja/fact?=${query}`).then((response) =>
    //         response.json()
    //     );
    //     };




}
