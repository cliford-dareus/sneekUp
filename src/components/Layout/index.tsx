import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutContainer, Main } from './styles';

const index = ({wallpaper }: {wallpaper: any }) => {
    const [bg, setBg ] = useState(null);

    useEffect(() => {
      setBg(wallpaper?.image)
    }, [wallpaper])

  return (
    <LayoutContainer style={{ backgroundImage: `url(${bg})` }}>
        <Header/>
        <Main >
            <Outlet />
        </Main>
        <Footer />
    </LayoutContainer>
  )
}

export default index