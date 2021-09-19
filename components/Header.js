import Link from 'next/link'
export default function CookieStandHeader(props){
return(
    <header  className="flex items-center justify-between p-4 font-medium bg-green-500">
        <h1 className="border-gray 50">
        Cookie Stand Admin
        </h1>
        <div className="float-right">
        <p className="px-2 inline-block align-middle text-sm bg-green-200 rounded-md m-1 p-1">{props.username}</p>
                <Link href="/">
                    <a className="px-2 inline-block align-middle text-white text-sm bg-green-600 p-1 rounded-md m-1" onClick={props.onLogout}>Sign Out</a>
                </Link>
        <button className="bg-white rounded px-5 py-2">
        <Link href="/overview" >
            Overview
            </Link>
        </button>
            </div>
    
       
      </header>
)
}