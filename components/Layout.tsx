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
        </ul>
      </Header>
      {children}
    </div>
  )
}

export default Layout