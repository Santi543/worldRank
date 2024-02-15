import styled from '@emotion/styled'
import {Box, Typography} from '@mui/material';
import Country from './Country'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 450px;
    overflow-y: scroll;
    z-index: 10;
    @media (max-width: 1280px) {
        width: 855px;
        overflow-x: hidden;
    }
`

const SortByTypography = styled(Typography)`
    color: #6C727F;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 12px;
    font-weight: 600;
`

const PropertiesOfCountries = styled(Box)`
    display: grid;
    grid-template-columns: 103px 188px 184px 195px 50px;
    align-items: center;
    justify-items: flex-start;
    gap: 60px;
    border-bottom: 1px solid #282B30;
    padding: 15px 0px 15px 0px;
    @media (max-width: 1350px) {
        grid-template-columns: 100px 120px 149px 152px 10px;
    }
`

const ContainerColumnProperties = styled(Box)`
    display: flex;
    flex-direction: column;
    @media (max-width: 1270px) {
        width: 750px;
        overflow-x: scroll;
    }
`

const CountriesContainer = ({ countries, setCountriesFound, sortingBy, search }) => {
    setCountriesFound(countries.length)
    let array = [];
    if (search) {
        array = countries.filter((prop) => prop.name.common.toLowerCase().includes(search.toLocaleLowerCase()) || prop.region.toLowerCase().includes(search.toLocaleLowerCase()) || prop.subregion?.toLowerCase().includes(search.toLocaleLowerCase()))
    } else {
        array = countries;
    }
    if (sortingBy === "Name") {
        countries.sort((a, b) => {
            if (a.name.common < b.name.common) {
                return -1
            }
        })
    }
    if (sortingBy === "Population") {
        countries.sort((a, b) => {
            if (a.population > b.population) {
                return -1;
            }
        })
    }
    if (sortingBy === "Area") {
        countries.sort((a, b) => {
            if (a.area > b.area) {
                return -1;
            }
        })
    }
    if (sortingBy === "Region") {
        countries.sort((a, b) => {
            if (a.region < b.region) {
                return -1;
            }
        })
    }
    return (
        <ContainerColumnProperties>
            <PropertiesOfCountries>
                <SortByTypography >Flag</SortByTypography>
                <SortByTypography >Name</SortByTypography>
                <SortByTypography >Population</SortByTypography>
                <SortByTypography sx={{ width: "70px" }}>Area (km)</SortByTypography>
                <SortByTypography >Region</SortByTypography>
            </PropertiesOfCountries>
            <Container>
                {array.map((country) => {
                    return (
                        <Country country={country} />
                    )
                })}

            </Container>
        </ContainerColumnProperties>
    )
}

export default CountriesContainer