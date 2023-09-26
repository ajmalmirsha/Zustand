import useStore from "../store/store"


export default function Button ({content,method}) {

   const {IncrementCount,DecrementCount} = useStore(state => state)
    const handleDec = () => {
        DecrementCount()
        
    }
    const handleInc = () => {
        IncrementCount()
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