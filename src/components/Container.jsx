import styled from '@emotion/styled'
import { Box, Typography, checkboxClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import down from "../imgs/Expand_down.svg"
import data from "../data/countries"
import CountriesContainer from './CountriesContainer'

const BoxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 510px;
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
    @media (max-width: 1350px){
        top: 395px;
    }
    
    @media (max-width: 1024px){
        top: 230px;
    }
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
  background: transparent url("./Search.svg") no-repeat center;
  cursor: pointer;
  opacity: 0.7;
`

const SearchBy = styled.input`
  border: none;
  background: #282B30;
  margin: 0;
  padding: 7px 0px;
  font-size: 14px;
  color: #6C727F;
  border: 1px solid transparent;
  border-radius: inherit;
  width: 312px;
  outline: none;
  font-weight: 600;
  ::placeholder{
    color: #6C727F;
  }
`

const BoxRowCenter = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;
`

const SortByBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 40px;
    position: relative;
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
    background-image: ${props => props.checked ? 'url("./Done_round.svg")' : false};
    cursor: pointer;
`

const TitleCheckBox = styled(Typography)`
    color: #D2D5DA;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Be Vietnam Pro', sans-serif;
`

const SortByListBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 65px;
    left: 0px;
    padding: 10px;
    z-index: 200;
    background-color: #1B1D1F;
    border: 1px solid #282B30;
    border-radius: 10px;
    gap: 15px;
    width: 100px;
`

const BoxForSortBy = styled(Box)`
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid #282B30;
    width: 100%;
`

const Container = () => {
    const [countries, setCountries] = useState([])
    const [filteredOut, setFilteredOut] = useState([])
    const [twoFilters, setTwoFilters] = useState([])
    const [checkBox, setCheckBox] = useState("")
    const [nameForRegion, setNameForRegion] = useState("")
    const [countriesFound, setCountriesFound] = useState(0)
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState([])
    const [filteredOutActive, setFilteredOutActive] = useState(false)
    const [status, setStatus] = useState([])
    const [twoActive, setTwoActive] = useState(0)
    const [sortByActive, setSortByActive] = useState(0)
    const [sortingBy, setSortingBy] = useState("Population")

    const searcher = (e) =>{
        setSearch(e.target.value)
        
    }

    const handleCheckBoxChange = (checkboxName) => {
        setCheckBox(checkboxName)
        if (status.find((prop) => prop === checkboxName)) {
            setCheckBox(null)
            setStatus(status.filter((prop) => prop !== checkboxName))
        } else {
            setStatus([...status, checkboxName]);
        }
    }

    const handleRegionChange = (regionName) => {
        setNameForRegion(regionName)
        if (region.find((prop) => prop === regionName)) {
            setRegion(region.filter((prop) => prop !== regionName))
        } else {
            setRegion([...region, regionName])
        }
    }

    useEffect(() => {
        if (status.length === 2) {
            return setFilteredOut((prev) => prev.filter((properties) => properties[checkBox] === true))
        }
        if (status.includes(checkBox)) {
            if (region.length > 0) {
                if (twoFilters.length > 0) {
                    if (!region.includes(nameForRegion)) {
                        let array = twoFilters.filter((properties) => properties.region !== nameForRegion)
                        return setTwoFilters([...array])
                    }
                    let array = countries.filter((properties) => properties[checkBox] === true && properties.region === nameForRegion)
                    return setTwoFilters([...twoFilters, ...array])
                } else {
                    if (filteredOut.length === 193 || filteredOut.length === 194) {
                        let array = filteredOut.filter((properties) => properties.region === nameForRegion)
                        return setTwoFilters([...twoFilters, ...array])
                    } else {
                        let array = filteredOut.filter((properties) => properties[checkBox] === true)
                        return setTwoFilters([...twoFilters, ...array])
                    }
                }
            }
            let array = countries.filter((properties) => properties[checkBox] === true)
            return setFilteredOut([...array])
        } else {
            if (status.find((prop) => prop === "unMember" || prop === "independent")) {
                let array = filteredOut.filter((properties) => properties[status[0]] === true)
                return setFilteredOut([...array])
            }
            if (region.length === 0) {
                let array = filteredOut.filter((properties) => properties[checkBox] === false)
                return setFilteredOut([...array])
            }
            if (region.length > 0) {
                let newArray = [];
                for (let index = 0; index < region.length; index++) {
                    let array = countries.filter((properties) => properties.region === region[index])
                    newArray.push(...array);
                }
                return setFilteredOut(newArray)
            }
        } if (!region.includes(nameForRegion)) {
            let array = filteredOut.filter((properties) => properties.region !== nameForRegion)
            return setFilteredOut([...array])
        }
    }, [checkBox, nameForRegion, status, region])

    /* console.log(twoFilters, "twoFilters")
   console.log(filteredOut, "filteredOut")  */

    useEffect(() => {
        if (status.length === 0 && region.length === 0) {
            setFilteredOut([])
        }
    }, [status])

    useEffect(() => {
        if (status.length > 0 || region.length > 0) {
            setFilteredOutActive(true)
        } else {
            setFilteredOutActive(false)
        }
    }, [status, region])

    useEffect(() => {
        if (status.length > 0 && region.length > 0) {
            setTwoActive(1)
        } else {
            setTwoActive(0)
            setTwoFilters([])
        }
    }, [status, region])

    useEffect(() => {
        if (countries.length === 0) {
            data
                .then(res => res.clone().json())
                .then(res => setCountries(res))
        }
    }, [countries])

    useEffect(() => {
        data
            .then(res => res.clone().json())
            .then(res => setCountries(res))
    }, [])

    return (
        <BoxContainer>
            <BoxRowTop>
                <CountriesFound>Found {countriesFound} countries</CountriesFound>
                <Form>
                    <ButtonSubmit type='submit' />
                    <SearchBy type='search' placeholder="Search by Name, Region or Subregion" onChange={(e) => searcher(e)} />
                </Form>
            </BoxRowTop>
            <BoxRowCenter>
                <BoxColumnLeft>
                    <SortByBox>
                        <SortByTypography>Sort By</SortByTypography>
                        <InputBox onClick={() => setSortByActive(!sortByActive)}>
                            <InputSelect readOnly={true} value={sortingBy} />
                            <img src={down} />
                        </InputBox>
                        {sortByActive ? <SortByListBox>
                            <BoxForSortBy onClick={() => setSortingBy("Name")}>
                                <SortByTypography >Name</SortByTypography>
                            </BoxForSortBy>
                            <BoxForSortBy onClick={() => setSortingBy("Population")}>
                                <SortByTypography>Population</SortByTypography>
                            </BoxForSortBy>
                            <BoxForSortBy onClick={() => setSortingBy("Area")}>
                                <SortByTypography >Area</SortByTypography>
                            </BoxForSortBy>
                            <BoxForSortBy onClick={() => setSortingBy("Region")}>
                                <SortByTypography >Region</SortByTypography>
                            </BoxForSortBy>
                        </SortByListBox> : null}
                    </SortByBox>
                    <ContainerRegion>
                        <SortByTypography>Region</SortByTypography>
                        <BoxGridRegions>
                            <BoxRowRegions>
                                <Regions region={region.find((obj) => obj === "Americas")} onClick={() => handleRegionChange("Americas")} continent={region.continent}>Americas</Regions>
                                <Regions region={region.find((obj) => obj === "Antarctic")} onClick={() => handleRegionChange("Antarctic")}>Antarctic</Regions>
                            </BoxRowRegions>
                            <BoxRowRegions>
                                <Regions region={region.find((obj) => obj === "Africa")} onClick={() => handleRegionChange("Africa")}>Africa</Regions>
                                <Regions region={region.find((obj) => obj === "Asia")} onClick={() => handleRegionChange("Asia")}>Asia</Regions>
                                <Regions region={region.find((obj) => obj === "Europe")} onClick={() => handleRegionChange("Europe")}>Europa</Regions>
                            </BoxRowRegions>
                            <Regions region={region.find((obj) => obj === "Oceania")} onClick={() => handleRegionChange("Oceania")}>Oceania</Regions>
                        </BoxGridRegions>
                    </ContainerRegion>
                    <BoxStatus>
                        <SortByTypography>Status</SortByTypography>
                        <BoxRowRegions>
                            <CheckBox checked={status.find((obj) => obj === "unMember")} onClick={() => handleCheckBoxChange('unMember')} />
                            <TitleCheckBox>Member of the United Nations</TitleCheckBox>
                        </BoxRowRegions>
                        <BoxRowRegions>
                            <CheckBox checked={status.find((obj) => obj === "independent")} onClick={() => handleCheckBoxChange("independent")} />
                            <TitleCheckBox>Independent</TitleCheckBox>
                        </BoxRowRegions>
                    </BoxStatus>
                </BoxColumnLeft>
                    <CountriesContainer countries={twoActive ? twoFilters : (filteredOutActive ? filteredOut : countries)}
                        setCountriesFound={setCountriesFound}
                        sortingBy={sortingBy}
                        search={search}
                    />
            </BoxRowCenter>
        </BoxContainer>
    )
}

export default Container