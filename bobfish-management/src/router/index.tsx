import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
const Home = lazy(()=>import('@/views/Home'))
const Page1 = lazy(()=>import('@/views/Page1'))
// const home = lazy(()=>import('@/views/Home'))
const withLoadingComponet = (comp:React.ReactElement) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}
const routers = [
    {
        path:'/',
        element:<Navigate to='/home'></Navigate>
    },
    {
        path:'/home',
        element:withLoadingComponet(<Home/>),
        children:[
            {
                path:'page1',
                element:withLoadingComponet(<Page1/>),
            }
        ]
    },

]
export default routers