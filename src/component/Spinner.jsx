import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className='d-flex justify-content-center'>
        <img style={{height:'50px',width:'50px'}} src={spinner}/>
    </div>
  )
}

export default Spinner