"use client";
import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import FileItem from './_components/FileItem';
import Link from 'next/link';
import Image from 'next/image';

const FileView = ({ params }) => {
    const { fileId } = React.use(params);

    const db = getFirestore(app);
    const [file, setFile] = useState();

    useEffect(() => {
        if (fileId) {
            getFileInfo();
        }
    }, [fileId]);

    const getFileInfo = async () => {
        const docRef = doc(db, "UploadFile", fileId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            console.log("No such document!");
        }
    };

    return (
        <div className='bg-gray-100 h-screen w-full justify-center items-center flex flex-col gap-4'>
            <Link href="/">
                <Image src="/logo.svg" width={150} height={100} alt='' />
            </Link>
            <FileItem file={file} />
        </div>
    );
}

export default FileView;
