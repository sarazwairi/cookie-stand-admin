import Head from 'next/head'
import { useEffect, useState } from 'react'
import CookieStandHeader from './Header'
import CookieStandFooter from './Footer';
import CookieStandForm from './CreateForm';
import CookieStandTable from './ReportTable';
import useSWR from 'swr';
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../data'


export default function CookieStandAdmin({ token, onlogout, username }) {
    console.log(fetchWithToken);
    const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);
    const [cookieStands, setCookieStands] = useState([]);

    useEffect(() => {
        if (!data) return;
        setCookieStands(data);
    }, [data])
    if (error) return <h2>ERROR</h2>

    if (!data) return <h2>Loading....</h2>

    async function createHandler(values) {

        const newStand = CookieStand.fromValues(values);

        newStand.location += '...';

        const updatedStands = [newStand, ...cookieStands]

        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();
    }

    async function deleteHandler(stand) {

        const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

        mutate(updatedStands, false);

        await deleteWithToken(stand.id, token);

        mutate(async stands => {
            return stands.filter(candidate => candidate.id !== stand.id);
        });
    }
    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <CookieStandHeader username={username} onlogout={onlogout} />
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

                <p className="m-8"></p>

                <CookieStandForm onCreate={createHandler} />
                {cookieStands.length === 0 ? (
                    <h2 className="mt-8 mb-8 ml-auto mr-auto text-center w-5/6">
                        No Cookie Stands Available
                    </h2>
                ) : (
                    <CookieStandTable stands={cookieStands} onDelete={deleteHandler} />
                )}
            </main>
            <CookieStandFooter reports={cookieStands} />

        </div>

    )
}