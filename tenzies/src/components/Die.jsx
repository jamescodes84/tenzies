export default function Die({ value , id, isHeld}) {
    const styles = {
        backgroundColor: isHeld ? "#59E391": "white"
    }
    return (
        <>
            <button style={styles}>{value}</button>
        </>
    )
}   