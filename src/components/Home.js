import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <div>Home Place</div>
            <button onClick={()=> navigate('order-summary', {replace: true})}>Place order</button>
        </>
    )
}

//the {replace:true} above will send the user to the previous website used when the go back button is clicked