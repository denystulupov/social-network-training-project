import React from "react";
import Spinner from "../components/Spinner/Spinner";

export const withSuspense = (Component) => {
    return props => {
        return <React.Suspense fallback={<Spinner/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}