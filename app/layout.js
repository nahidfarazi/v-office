import Sidebar from '@/components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'V-Office',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <script src="./node_modules/preline/dist/preline.js"></script>
        <Sidebar>{children}</Sidebar>
        </body>
    </html>
  )
}
