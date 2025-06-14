export default function Die({ value , id, isHeld, holdFunc }) {
    const styles = {
        backgroundColor: isHeld ? "#59E391": "white"
    }
    return (
        <>
            <button style={styles} onClick={()=>{holdFunc(id)}}>{value}</button>
        </>
    )
}   