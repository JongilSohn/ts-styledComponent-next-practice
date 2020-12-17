import Link from "next/link";
import axios from 'axios';
import Router from 'next/router';

function GetDouble(props) {
  return (
    <div>
      <div>
        {props.value}
      </div>
      <div>
{/* 
        Link는 돔으로써 href 속성으로 이동하게 되는 컴포넌트이데
        그것 외에 Router를 사용하는 방법. */}

        {/* Router.back()을 사용하면 현재 history상의 back으로 돌아가게 됩니다. 더 좋은 방법이다. */}
        {/* <Link href="/"> */}
          <button onClick={() => Router.back()}>
            돌아가기
          </button>
        {/* </Link> */}
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