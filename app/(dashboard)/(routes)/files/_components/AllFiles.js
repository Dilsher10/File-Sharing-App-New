"use client"
import { app } from '@/firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllFiles = () => {
    const db = getFirestore(app);
    const [files, setFiles] = useState([]);  

    useEffect(() => {
        getFileInfo();
    }, []);

    const getFileInfo = async () => {
        const filesCollectionRef = collection(db, "UploadFile");  // Reference to the "UploadFile" collection
        const querySnapshot = await getDocs(filesCollectionRef);  // Fetch all documents

        const filesData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()  // Spread document data into the object
        }));

        console.log("Files data:", filesData);
        setFiles(filesData);  // Set the state with the array of files
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {files.length > 0 ? (
                        files.map((item, index) => (
                            <tr key={index} className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.fileName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.fileType}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.fileSize}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link
                                        href={`/file-preview/${item.id}`}
                                        className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 cursor-pointer"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center px-4 py-2 text-gray-700">No files available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AllFiles;
