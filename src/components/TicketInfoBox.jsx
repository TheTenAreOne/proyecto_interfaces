import '../pages/Home.css';

function TicketInfoBox(props) {

  const ticket = [
    {
      "origen": "Cali", "destino": "Bogota", "precio": "150.000", "salida": "01/01/2021", "hora": "09:00",
      "aerolinea": "Aerolínea 1",
    },
    {
      "origen": "Cali", "destino": "Bogota", "precio": "200.000", "salida": "01/01/2021", "hora": "13:00",
      "aerolinea": "Aerolínea 2",
    },
    {
      "origen": "Cali", "destino": "Bogota", "precio": "350.000", "salida": "01/01/2021", "hora": "15:00",
      "aerolinea": "Aerolínea 3",
    },
    {
      "origen": "Cali", "destino": "Bogota", "precio": "370.000", "salida": "01/01/2021", "hora": "07:00",
      "aerolinea": "Aerolínea 4",
    },
    {
      "origen": "Cali", "destino": "Bogota", "precio": "400.000", "salida": "01/01/2021", "hora": "05:00",
      "aerolinea": "Aerolínea 5",
    },
    {
      "origen": "Cali", "destino": "Bogota", "precio": "450.000", "salida": "01/01/2021", "hora": "18:00",
      "aerolinea": "Aerolínea 6",
    }
  ];

  const renderHeader = () => {
    let headerElement = ['origen', 'destino', 'precio', 'salida', 'hora', 'aerolinea']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = () => {
    return ticket && ticket.map(({ origen, destino, precio, salida, hora, aerolinea }) => {
      return (
        <tr key={origen}>
          <td>{origen}</td>
          <td>{destino}</td>
          <td>{precio}</td>
          <td>{salida}</td>
          <td>{hora}</td>
          <td>{aerolinea}</td>
        </tr>
      )
    })
  }

  return (
    <>
      <table id='employee'>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
  )
}

export default TicketInfoBox;