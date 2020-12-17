import { Children } from "react"
import styled from 'styled-components'  
import Link from 'next/link';

const Header = styled.div`
  background-color: #aff7af;
`;


function Layout ({children}) {
  return (
    <div>
      <Header>
        <ul>
          <Link href="/">
            <a>
              <li>
                Home
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>
                소개
              </li>
            </a>
          </Link>
          <Link href="/get-uuid">
            <a>
              <li>
                GET-UUID
              </li>
            </a>
          </Link>

          {/* 이렇게 만들면 딜레이가 생기는데 href에 할당은 파일명만 와야한다. (/get-double) */}
          {/* get-double/10이라는 파일명이 없을 경우에는 a태그 처럼 동작한다. 그렇기 때문에 딜레이가 생긴다./ */}

          <Link href="/get-double/10">
            <a>
              <li>
                GET-10 double
              </li>
            </a>
          </Link>
          <Link href="/get-double/20">
            <a>
              <li>
                GET-20-double
              </li>
            </a>
          </Link>

          {/* 그러므로 동적라우팅을 할 때에는 value와 as를 설정해야한다../ */}
          <Link href="/get-double/[value]" as='/get-double/11'>
            <a>
              <li>
                GET-20-double-daynamic
              </li>
            </a>
          </Link>
        </ul>
      </Header>
      {children}
    </div>
  )
}

export default Layout