import localFont from '@next/font/local'

export const lamaRoundedFont = localFont({ src: [
  {
    path: '../../assets/fonts/LamaRounded-Regular.woff2',
    weight: '400'
  },
  {
    path: '../../assets/fonts/LamaRounded-Bold.woff2',
    weight: '700'
  },
  {
    path: '../../assets/fonts/LamaRounded-Black.woff2',
    weight: '900'
  },
]})