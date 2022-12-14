import Acordian from './Acordian'
import './All.css'

const accData = {
    itemGroup: [
        { id: '1', country: 'Country A' },
        { id: '2', country: 'Country B' },
        { id: '3', country: 'Country C' }
    ],
    items: [
        { id: '1', country: 'Afghanistan.' },
        { id: '1', country: 'Armenia.' },
        { id: '1', country: 'Argentina.' },
        { id: '2', country: 'Bahrain.' },
        { id: '2', country: 'Belgium.' },
        { id: '3', country: 'cc.' },
        { id: '2', country: 'Bangladesh.' },
        { id: '3', country: 'cc.' }
    ]

}

function AccodianPage() {

    return (
        <div>
            {accData.itemGroup.map((item) => {  
                return <Acordian key={item.id} value={{ item: item, allData: accData.items }} />
            })}
        </div>
    )
}
export default AccodianPage