import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Lock(props) {
  const lock = `

    <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="21" height="29" fill="#fff"/>
    <path d="M2.25 10.5H3.75V7.95158C3.75 3.59846 6.75 0.0109646 10.4812 2.71309e-05C14.2125 -0.0109104 17.25 3.52737 17.25 7.87502V10.5H18.75C19.9922 10.5 21 11.6758 21 13.125V25.375C21 26.8242 19.9922 28 18.75 28H2.25C1.00781 28 -4.76837e-07 26.8242 -4.76837e-07 25.375V13.125C-4.76837e-07 11.6758 1.00781 10.5 2.25 10.5ZM15 7.87502C15 4.98205 12.9797 2.62502 10.5 2.62502C8.02031 2.62502 6 4.98205 6 7.87502V10.5H15V7.87502ZM2.25 25.375H18.75V13.125H2.25V25.375Z" />
    <rect y="10" width="21" height="19" rx="3" />
    <rect x="9" y="15" width="3" height="3" fill="white"/>
    <rect x="10" y="18" width="1" height="6" fill="white"/>
    </svg>

    `;

  const Lock = () => (
    <SvgXml xml={lock} width='33' height='33' fill='#00FF97' {...props} />
  );

  return <Lock />;
}
