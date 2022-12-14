import { createContext } from "react"
import { ButtonGroup, Dropdown, DropdownButton, SplitButton } from "react-bootstrap"
import { Link, Route, Routes } from "react-router-dom"
import Cards from "./Components/Cards"
import Finance from "./Components/Finance"
import History from "./Components/History"
import Home from "./Components/Home"
import View from "./Components/View"
import './Finance.css'

const financeSurvey = {
    home: {
        title: ' Home Page',
        data: [],
    },
    card: {
        title: ' Card Page',
        detail: 'This Credit Card for Life time valid you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for bandwidth bill.',
        columns: [
            { header: 'Card Number', cell: 'cNumber' },
            { header: 'Card Name', cell: 'cName' },
            { header: 'Card Expiry', cell: 'cExpiry' },
        ],
        rows: [
            { cName: 'A', cNumber: 123, cExpiry: '20 / 29' },
            { cName: 'B', cNumber: 234, cExpiry: '13 / 28' },
            { cName: 'C', cNumber: 532, cExpiry: '10 / 27' },
            { cName: 'D', cNumber: 867, cExpiry: '11 / 24' },
        ],
    },
    finance: {
        title: ' Finance Page',
        detail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
        viewData: {
            tableData1: {
                heading: 'Muslim Country',
                columns: [
                    { header: 'Country ', cell: 'country' },
                    { header: 'TaxRate', cell: 'taxRate' },
                    { header: 'Currency', cell: 'currency' },

                ],
                rows: [
                    { country: 'Saudi Arabia', taxRate: '5%', currency: 'Saudi Riyal' },
                    { country: 'San Marino', taxRate: '8%', currency: '	Euro' },
                    { country: 'United States', taxRate: '14%', currency: 'US Dollar' },
                    { country: 'Indonesia', taxRate: '12%', currency: 'Rupiah' },
                ]
            },
            tableData2: {
                heading: 'Hindu Country',
                columns: [
                    { header: 'Country ', cell: 'country' },
                    { header: 'TaxRate', cell: 'taxRate' },

                ],
                rows: [
                    { country: 'India', taxRate: '30%' },
                    { country: 'Nepal', taxRate: '17%' },

                ]
            },


        },
        historyData: []
    }
};
// console.log(financeSurvey);
export const ContextData = createContext()
function MainDom() {
    return (
        <div>
            <div className="mb-2">
                <DropdownButton as={ButtonGroup} size="lg" title="Menu Dropdown" >
                    <div className="DropDown">
                        <h5><Link to='/'>Home</Link></h5>
                        <h5><Link to='/card'>Card</Link></h5>
                        <h5> <Link to='/finance'>Finance</Link></h5>
                    </div>
                </DropdownButton>
                <Routes>
                    <Route path="/" element={<ContextData.Provider value={financeSurvey}>
                        <Home />
                    </ContextData.Provider>
                    } />
                    <Route path="/card" element={<ContextData.Provider value={financeSurvey}>
                        <Cards />
                    </ContextData.Provider>} />
                    <Route path="/finance" element={<ContextData.Provider value={financeSurvey}> <Finance /> </ContextData.Provider>} >
                        <Route path='/finance' element={<View />} />
                        <Route path='history' element={<History />} />
                    </Route>
                </Routes>

            </div>
        </div>
    )
}
export default MainDom