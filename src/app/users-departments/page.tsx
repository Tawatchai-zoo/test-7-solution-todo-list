'use client'

import { useEffect, useState } from 'react';

type addressUser = {
    name: string
    address: string
}
type hairColor = {
    hairColor: string
    quantity: number
}

type usersDepartmentsData = {
    department: string
    ageRange: string
    male: number
    female: number
    addressUser: addressUser[]
    hairColor: hairColor[]
}

export default function UserDepartments() {
    const [data, setData] = useState<usersDepartmentsData[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch('/api/users');

                if (!res.ok) {
                    throw new Error('No message')
                }

                const { departments } = await res.json();
                const _data = []
                for (const department of Object.keys(departments)) {
                    const { male, female, ageRange, addressUser, hair } = departments[department]
                    const addressUserArr = Object.keys(addressUser).map(name => ({ name, address: addressUser[name] }))
                    const hairColor = Object.keys(hair).map(hairColor => ({ hairColor, quantity: hair[hairColor] }))
                    const formatData = { department: department, male, female, ageRange, addressUser: addressUserArr, hairColor }
                    _data.push(formatData)
                }
                setData(_data);
            } catch (error) {
                console.error('get user departments error: ', error)
                setData([])
            }
        }
        getUsers()
    }, [])

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-6 mx-6">
            <div className="text-2xl font-bold mb-6 flex justify-between">
                <h1 >Get user departments with gRPC</h1>
                <a href={process.env.USERS_DEPARTMENTS_REPO} target="_blank" className="hover:text-blue-500 cursor-pointer">Repository</a>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-h-100">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ageRange
                        </th>
                        <th scope="col" className="px-6 py-3">
                            male
                        </th>
                        <th scope="col" className="px-6 py-3">
                            female
                        </th>
                        <th scope="col" className="px-6 py-3">
                            user address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            hair color
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(_data => (
                        <tr key={_data.department} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                                {_data.department}
                            </td>
                            <td className="px-6 py-4">
                                {_data.ageRange}
                            </td>
                            <td className="px-6 py-4">
                                {_data.male}
                            </td>
                            <td className="px-6 py-4">
                                {_data.female}
                            </td>
                            <td className="px-6 py-1">
                                <ul className='max-h-10 overflow-y-auto scrollbar-hide'>
                                    {_data.addressUser.map(address => (
                                        <li key={`${_data.department} ${address.address}`}>{address.name} : {address.address}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="px-6 py-1">
                                <ul className='max-h-10 overflow-y-auto scrollbar-hide'>
                                    {_data.hairColor.map(hairColor => (
                                        <li key={`${_data.department} ${hairColor.hairColor}`}>{hairColor.hairColor} : {hairColor.quantity}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >

    );
}