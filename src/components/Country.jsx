import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: grid;
    grid-template-columns: 115px 300px 275px 206px 90px;
    align-items: center;
    justify-items: flex-start;
    padding: 25px 0px;
    gap: 40px;
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
    <Container>
      <Flag src={country?.flags.png} />
      <PropertiesCountry >{country?.name.common}</PropertiesCountry>
      <PropertiesCountry >{country?.population}</PropertiesCountry>
      <PropertiesCountry >{country?.area}</PropertiesCountry>
      <PropertiesCountry >{country?.region}</PropertiesCountry>
    </Container>
  )
}

export default Country