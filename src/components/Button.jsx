import useStore from "../store/store"


export default function Button ({content,method}) {

    const handleDec = () => {
        useStore()
    }
    const handleInc = () => {

    }
    return (
        <>
        {
            method === 'Inc' ?  
            <button  onClick={handleInc}>
             {content}
            </button> :
             <button onClick={handleDec} >
             {content}
            </button>
        }
       
        </>
    )
}