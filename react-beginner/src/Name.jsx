/* eslint-disable react/prop-types */
const Name = (props)=> {
    const {firstName, lastName} = props
    return(
        <>
            <div style={{display:"block"}}>
                <label htmlFor="id">{firstName}</label>
                <input type="id" />
                <label htmlFor="id">{lastName}</label>
                <input type="id" />
            </div>
        </>
    )
}
export default Name