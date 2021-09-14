import Head from 'next/head'
import { useState } from 'react'
import CookieStandHeader from './Header'
import CookieStandFooter from './Footer';
import CookieStandForm from './CreateForm';
import CookieStandTable from './ReportTable';
import { hours } from '../data'


export default function CookieStandAdmin() {
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    const [stands, setStands] = useState([])
    function onCreate(event) {
        event.preventDefault()
        const newstands = {
            location: event.target.location.value,
            hourly_sales: hourly_sales,

        }
        setStands([...stands, newstands])
    }
        return (
            <div>
                <Head>
                    <title>Cookie Stand Admin</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <CookieStandHeader />
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                  
                    <p className="m-8"></p>

                    <CookieStandForm onCreate={onCreate}/>
                       {(stands.length)?
                        <CookieStandTable stands={stands}/>:
                        <h2>No Cookie Stands Available</h2>
                       }
                    
                </main>

                <CookieStandFooter stands={stands}/>

            </div>

        )
    }