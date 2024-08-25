'use client'
import React from 'react';
import FooterDesktop from './FooterViews/Footer'
import FooterMobile from './FooterViews/FooterMobile';
import useMediaQuery from '../../hooks/useMediaQuery'; // Custom hook to detect screen size

const ParentFooter = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust the width as needed

    return (
        <>
            {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </>
    );
};

export default ParentFooter;