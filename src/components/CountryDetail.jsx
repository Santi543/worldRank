import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Flag = styled.img`
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 885px;
    left: 0;
    right: 0;
    margin: auto;
    width: 300px;
    height: auto;
`

const NameCountry = styled.h3`
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #D2D5DA;
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 10px;
`

const OfficialName = styled(Typography)`
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #D2D5DA;
  font-size: 16px;
  margin-bottom: 40px;
`

const ContainerPopulationArea = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
`

const BoxPopulationArea = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: #282B30;
  padding: 10px;
  border-radius: 10px;
  gap: 20px;
`

const Properties = styled(Box)`
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #D2D5DA;
  font-size: 16px;
  padding: 10px 25px 10px 10px;
`

const BoxForMoreProperties = styled(Box)`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #282B30;
  padding: 15px 0px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const DarkProperty = styled(Box)`
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #6C727F;
  font-size: 16px;
  padding: 10px 10px 10px 25px;
`

const CountryDetail = ({ params }) => {
  const [currencie, setCurrencie] = useState("")
  useEffect(() => {
    setCurrencie(params[0].currencies[Object.keys(params[0])[0]])
  }, [params])
  /* params.currency[Object.keys(params.currency)[0]] */

  console.log(currencie)
  return (
    <>
      <Flag src={params[0]?.flags.png} />
      <NameCountry>{params[0]?.name.common}</NameCountry>
      <OfficialName>{params[0]?.name.official}</OfficialName>
      <ContainerPopulationArea>
        <BoxPopulationArea>
          <Properties sx={{ borderRight: "1px solid #1B1D1F" }}>Population</Properties>
          <Properties>{params[0]?.population}</Properties>
        </BoxPopulationArea>
        <BoxPopulationArea>
          <Properties sx={{ borderRight: "1px solid #1B1D1F" }}>Area (km) </Properties>
          <Properties>{params[0]?.area}</Properties>
        </BoxPopulationArea>
      </ContainerPopulationArea>
      <BoxForMoreProperties>
        <DarkProperty>Capital</DarkProperty>
        <Properties>{params[0]?.capital[0]}</Properties>
      </BoxForMoreProperties>
      <BoxForMoreProperties>
        <DarkProperty>Subregion</DarkProperty>
        <Properties>{params[0]?.subregion}</Properties>
      </BoxForMoreProperties>
      <BoxForMoreProperties>
        <DarkProperty>Language</DarkProperty>
        <Properties>{params[0]?.languages.zho}</Properties>
      </BoxForMoreProperties>
      <BoxForMoreProperties>
        <DarkProperty>Currencies</DarkProperty>
        <Properties>{params[0]?.currencies.CNY.name}</Properties>
      </BoxForMoreProperties>
      <BoxForMoreProperties>
        <DarkProperty>Continents</DarkProperty>
        <Properties>{params[0]?.continents[0]}</Properties>
      </BoxForMoreProperties>
      <BoxForMoreProperties>
        <DarkProperty>Neighbouring Countries</DarkProperty>
        <Properties></Properties>
      </BoxForMoreProperties>





    </>
  )
}

export default CountryDetail