import Link from "next/link";
import axios from 'axios';

function GetDouble(props) {
  return (
    <div>
      <div>
        {props.value}
      </div>
      <div>
        <Link href="/">
          <button>
            돌아가기
          </button>
        </Link>
      </div>

    </div>
  )
}

GetDouble.getInitialProps = async function (context) {
  const value = context.query.value;
  const response = await axios.get('http://localhost:3000' + '/api/double?value=' + value)
    console.log(response)
  
  return {
    value: response.data.value
  }

}

export default GetDouble;