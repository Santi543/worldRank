import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CountryDetail from './CountryDetail'
import { useParams } from 'react-router-dom'
import data from '../data/countries'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 1000px;
    align-items: center;
    width: 850px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 800px;
    margin: auto;
    background-color: #1B1D1F;
    border: 1px solid #282B30;
    border-radius: 14px;
`

const RelativeBox = styled(Box)`
display: flex;
flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`
const CountryDetailContainer = () => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const Params = useParams()
  useEffect(() => {
    data.then((res) => res.clone().json()).then((res) => setSelectedCountry(res.filter((prop) => prop.name.common === Params.id)))
  }, [])

  console.log(selectedCountry[0]?.name.common)
  console.log(Params.id, "params")
  return (
    <Container>
      <RelativeBox>
        <CountryDetail params={selectedCountry} />
      </RelativeBox>
    </Container>
  )
}

export default CountryDetailContainer