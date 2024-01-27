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

const CountriesContainer = ({ countries }) => {

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