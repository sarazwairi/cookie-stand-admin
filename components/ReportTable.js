import {hours} from '../data'

export default function CookieStandTable(props){

  // function getTotalCookies(hourly_data) {
  //   var total = 0
  //   for (var i = 0; i < hourly_data.length; i++) { total += hourly_data[i] }
  //   return total
  // }
  // function getHourlySubtotals(hours, sales) {
  //   var hourly_subtotals = []
  //   for (var i = 0; i < hours.length; i++) {
  //     var hour_subtotal = 0
  //     for (var j = 0; j < sales.length; j++) { hour_subtotal += sales[j].hourly_sales[i] }
  //     hourly_subtotals.push(hour_subtotal)
  //   }
  //   return hourly_subtotals
  // }

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
              <tr key={stand.id} className="text-left border border-separate border-green-500 odd:bg-green-200 even:bg-green-300">
                  <th className="">
                      <div className="flex relative">
                          <p className="text-left p-1 mr-24 text-sm">{stand.location}</p>
                          <img src="/red_trash.png" onClick={() => onDelete(stand)} width="20" height="20" className="absolute right-0 self-center"/>
                      </div>
                  </th>

                  {stand.cookiesEachHour.map((amt, i) => (
                      <td key={i} className="">{amt}</td>
                  ))}
                  <td>{stand.totalDailyCookies}</td>
              </tr>
          )
      })}
  </tbody>
  <tfoot className="">
      <tr className="bg-green-400 text-sm">
          <th className="">Totals</th>
          {hours.map((_, i) => {
              const amt = props.stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0 );
              return <td key={'amt' + i}>{amt}</td>
          })}
          <td>{props.stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</td>
      </tr>
  </tfoot>
</table>

)
}