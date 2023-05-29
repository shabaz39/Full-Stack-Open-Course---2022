import React from 'react'

const FilterPerson = (props) => {
    return (
        <form>
        Filter
        <input
            value={props.newSearch}
            onChange={props.handleSearchChange} />
            <br />
        </form> 
    ) 
}

export default FilterPerson