import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import down from "../imgs/Expand_down.svg"
import search from "../imgs/Search.svg"

const BoxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 552px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 25px;
    border-radius: 12px;
    width: 90%;
    height: 600px;
    background-color: #1B1D1F;
    border: 1px solid #282B30;
`

const BoxRowTop = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
`

const CountriesFound = styled(Typography)`
    color: #6C727F;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;
    font-weight: 600;
`

const Form = styled.form`
  color: #282B30;
  background: #282B30;
  display: flex;
  padding: 2px;
  border: 1px solid currentColor;
  border-radius: 10px;
`

const ButtonSubmit = styled.button`
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("../imgs/Search.svg") no-repeat 13px;
  cursor: pointer;
  opacity: 0.7;
`

const SearchBy = styled.input`
  border: none;
  background: #282B30;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: #6C727F;
  border: 1px solid transparent;
  border-radius: inherit;
  width: 300px;
  outline: none;
  font-weight: 600;
  ::placeholder{
    color: #6C727F;
  }
`

const BoxRowCenter = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const SortByBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 40px;
`

const InputBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #282B30;
    padding: 10px;
    
`

const SortByTypography = styled(Typography)`
    color: #6C727F;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: 600;
`

const InputSelect = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #D2D5DA;
    width: 225px;
`

const BoxColumnLeft = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const ContainerRegion = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    margin-bottom: 40px;
`

const BoxGridRegions = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const BoxRowRegions = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 2px;
    align-items: center;
`

const Regions = styled(Box)`
    padding: 8px 12px 8px 12px;
    color: ${props => props.region ? "#D2D5DA" : "#6C727F"} ;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    font-weight: 500;
    background-color: ${props => props.region ? "#282B30" : false};
    cursor: pointer;
    border-radius: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
`

const BoxStatus = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
`

const CheckBox = styled(Box)`
    border-radius: 5px;
    border: ${props => props.checked ? '2px solid #4E80EE' : '2px solid #6C727F'} ;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: ${props => props.checked ? "#4E80EE" : false};
    background-image: ${props => props.checked ? 'url("../imgs/Done_round.svg")' : false};
`

const TitleCheckBox = styled(Typography)`
    color: #D2D5DA;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Be Vietnam Pro', sans-serif;
`

const Container = () => {
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState({
        americas: false,
        antarctic: false,
        africa: false,
        asia: false,
        europa: false,
        oceania: false,
    })

    const [status, setStatus] = useState({
        checkbox1: false,
        checkbox2: false
    })

    const handleCheckBoxChange = (checkboxName) =>{
        setStatus({
            ...status,
            [checkboxName]: !status[checkboxName]
        })
    }

    const handleRegionChange = (regionName) =>{
        setRegion({
            ...region,
            [regionName]: !region[regionName]
        })
    }

    return (
        <BoxContainer>
            <BoxRowTop>
                <CountriesFound>Found 234 countries</CountriesFound>
                <Form>
                    <ButtonSubmit type='submit'/>
                    <SearchBy type='search' placeholder=" Search by Name, Region or Subregion" onChange={() => search}/>
                </Form>
            </BoxRowTop>
            <BoxRowCenter>
                <BoxColumnLeft>
                    <SortByBox>
                        <SortByTypography>Sort By</SortByTypography>
                        <InputBox onClick={() => console.log("hola")}>
                            <InputSelect readOnly={true} defaultValue="Population" />
                            <img src={down} />
                        </InputBox>
                    </SortByBox>
                    <ContainerRegion>
                        <SortByTypography>Region</SortByTypography>
                        <BoxGridRegions>
                            <BoxRowRegions>
                                <Regions region={region.americas} onClick={() => handleRegionChange("americas")} continent={region.continent}>Americas</Regions>
                                <Regions region={region.antarctic} onClick={() => handleRegionChange("antarctic")}>Antarctic</Regions>
                            </BoxRowRegions>
                            <BoxRowRegions>
                                <Regions region={region.africa} onClick={() => handleRegionChange("africa")}>Africa</Regions>
                                <Regions region={region.asia} onClick={() => handleRegionChange("asia")}>Asia</Regions>
                                <Regions region={region.europa} onClick={() => handleRegionChange("europa")}>Europa</Regions>
                            </BoxRowRegions>
                            <Regions region={region.oceania} onClick={() => handleRegionChange("oceania")}>Oceania</Regions>
                        </BoxGridRegions>
                    </ContainerRegion>
                    <BoxStatus>
                        <SortByTypography>Status</SortByTypography>
                        <BoxRowRegions>
                            <CheckBox checked={status.checkbox1} onClick={() => handleCheckBoxChange('checkbox1')}/>
                            <TitleCheckBox>Member of the United Nations</TitleCheckBox>
                        </BoxRowRegions>
                        <BoxRowRegions>
                            <CheckBox checked={status.checkbox2} onClick={() => handleCheckBoxChange('checkbox2')}/>
                            <TitleCheckBox>Independent</TitleCheckBox>
                        </BoxRowRegions>
                    </BoxStatus>
                </BoxColumnLeft>
            </BoxRowCenter>
        </BoxContainer>
    )
}

export default Container