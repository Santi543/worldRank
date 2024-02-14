import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Country from './Country'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 450px;
    overflow-y: scroll;
`

const CountriesContainer = ({ countries, setCountriesFound, sortingBy }) => {
    const [countriesFiltered, setCountriesFiltered] = useState([])
    setCountriesFound(countries.length)
    if (sortingBy === "Name") {
        countries.sort((a, b) => {
            if (a.name.common < b.name.common) {
                return -1
            }
        })
    }
    if(sortingBy === "Population"){
        countries.sort((a, b) =>{
            if(a.population > b.population){
                return -1;
            }
        })
    }
    if(sortingBy === "Area"){
        countries.sort((a, b) =>{
            if(a.area > b.area){
                return -1;
            }
        })
    }
    if(sortingBy === "Region"){
        countries.sort((a, b) => {
            if(a.region < b.region){
                return -1;
            }
        })
    }

    console.log(countries)
    return (
        <Container>
            {countries.map((country) => {
                return (
                    <Country country={country} />
                )
            })}

        </Container>
    )
}

export default CountriesContainer