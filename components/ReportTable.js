import {hours} from '../data'

export default function CookieStandTable(props){

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
    <table className="p-1 mt-8 mb-8 ml-auto mr-auto w-5/6 h-auto text-center self-center">
    <thead className="bg-green-500">
      <tr>
        <th className="border border-gray-700">Location</th>
        {hours.map((hour) => (
          <th className="border border-gray-700">{hour}</th>
        ))}
        <th className="border border-gray-700">Total</th>
      </tr>
    </thead>
    <tbody>
      {props.stands.map((store) => (
        <tr className="odd:bg-green-400 even:bg-green-200">
          <td className="border border-gray-700">{store.location}</td>
          {store.hourly_sales.map((cookies) => (
            <td className="border border-gray-700">{cookies}</td>
          ))}
          <td className="border border-gray-700">
            {getTotalCookies(store.hourly_sales)}
          </td>
        </tr>
      ))}
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