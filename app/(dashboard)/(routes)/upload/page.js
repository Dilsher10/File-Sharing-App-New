"use client";
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import { setDoc, doc, getFirestore } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';
import { app } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';


const Upload = () => {
  const { user } = useUser();
  const router = useRouter();
  const db = getFirestore(app);
  const [fileDocId, setFileDocId] = useState();

  const uploadFile = async (file) => {
    if (!file) {
      alert("Please upload a file!");
    } else {
      const data = new FormData();
      data.set("file", file);
      let result = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      result = await result.json();
      if (result.success) {
        alert("File uploaded successfully");
        const docId = await saveInfo(file, result.fileUrl); // Ensure docId is returned
        router.push(`/file-preview/${docId}`);
      } else {
        alert("File upload failed");
      }
    }
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "UploadFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: `${process.env.NEXT_PUBLIC_BASE_URL}${fileUrl}`,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
    setFileDocId(docId); // Update the state
    return docId; // Return the docId for immediate use
  };


  return (
    <div className='p-5 px-8 md:px:28'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
};

export default Upload;
