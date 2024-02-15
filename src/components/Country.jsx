import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CountryDetailContainer from './CountryDetailContainer'

const Container = styled(Box)`
    display: grid;
    grid-template-columns: 115px 50px 400px 12px 390px;
    align-items: center;
    justify-items: center;
    margin: 25px 0px;
    gap: 40px;
    cursor: pointer;
    @media (max-width: 1350px) {
      grid-template-columns: 120px 36px 276px 59px 258px;
    }
    @media (max-width: 1330px) {
      
    }
`

const Flag = styled.img`
    width: 60px;
    height: 40px;
    border-radius: 4px;
    margin-right: 57px;
`

const PropertiesCountry = styled(Typography)`
  color: #D2D5DA;
  font-size: 14px;
  font-family: 'Be Vietnam Pro', sans-serif;
  white-space: nowrap;
`

const Country = ({ country }) => {

  return (
    <Link style={{textDecoration: 'none'}} to={`/countries/${country.name.common}`}>
      <Container>
        <Flag src={country?.flags.png} />
        <PropertiesCountry >{country?.name.common}</PropertiesCountry>
        <PropertiesCountry >{country?.population}</PropertiesCountry>
        <PropertiesCountry >{country?.area}</PropertiesCountry>
        <PropertiesCountry >{country?.region}</PropertiesCountry>
      </Container>
      </Link>
  )
}

export default Country