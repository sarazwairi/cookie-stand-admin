import {hours} from '../data'

export default function CookieStandTable(props){
//   const hourlySales=[]

 
  function getTotalCookies(hourly_data) {
    var total = 0
    for (var i = 0; i < hourly_data.length; i++) { total += hourly_data[i] }
    return total
  }
  function getHourlySubtotals(hours, sales) {
    var hourly_subtotals = []
    for (var i = 0; i < hours.length; i++) {
      var hour_subtotal = 0
      for (var j = 0; j < sales.length; j++) { hour_subtotal += sales[j].hourly_sales[i] }
      hourly_subtotals.push(hour_subtotal)
    }
    return hourly_subtotals
  }

return(
  <table className="">
  <thead className="">
      <tr className="text-left bg-green-400 text-sm">
          <th className="px-8">Location</th>
          {hours.map(hour => (<th className="px-3" key={hour}>{hour}</th>))}
          <th className="px-3">Totals</th>
      </tr>
  </thead>
  <tbody className="bg-green-300 text-sm">
      {props.stands.map((stand, i) => {
          return (
            <tr key={stand.id}className="odd:bg-green-400 even:bg-green-200">
            <th className=" border flex pl-2 border-gray-700">
        
              {/* <tr  className="text-left border border-separate border-green-500 odd:bg-green-200 even:bg-green-300">
                  <th className=""> */}
                      <div className="flex relative">
                          <p className="text-left p-1 mr-24 text-sm">{stand.location}</p>
                          <img src="https://w1.pngwing.com/pngs/431/160/png-transparent-icon-design-trash-red-line-area-material-rectangle.png" onClick={() => props.onDelete(stand)} width="20" height="20" className="absolute right-0 self-center"/>
                      </div>
                  </th>

                  {stand.hourly_sales.map((amt, i) => (
                      <td key={i} className="border border-gray-700">{amt}</td>
                  ))}
                  <td className="border border-gray-700">{getTotalCookies(stand.hourly_sales)}</td>
              </tr>
          )
      })}
  </tbody>
  <tfoot className="bg-green-500">
      <th className="border border-gray-700">Totals</th>
      {getHourlySubtotals(hours,props.stands).map((subtotal) => (
        <th className="border border-gray-700">{subtotal}</th>
      ))}
      <th className="border border-gray-700">{getTotalCookies(getHourlySubtotals(hours,props.stands))}</th>
    </tfoot>
</table>

)
}