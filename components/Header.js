import Link from 'next/link'
export default function CookieStandHeader(){
return(
    <header  className="flex items-center justify-between p-4 font-medium bg-green-500">
        <h1 className="border-gray 50">
        Cookie Stand Admin
        </h1>
        <button className="bg-white rounded px-5 py-2">
        <Link href="/overview" >
            Overview
            </Link>
        </button>
    
       
      </header>
)
}