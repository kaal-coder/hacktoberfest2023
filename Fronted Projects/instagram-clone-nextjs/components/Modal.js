import React, { Fragment, useState } from "react";
import { useAuth } from "../context/useAuth";
import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
  const { modal, user } = useAuth();
  const [modalStatus, setModalStatus] = modal;
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const captionRef = useRef(null);

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "post"), {
      username: user.displayName,
      caption: captionRef.current.value,
      profileImg: user.photoURL,
      timestamp: serverTimestamp(),
    });

    console.log("🚀 New Doc Added with ID: ", docRef.id);

    const imageRef = ref(storage, `post/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "post", docRef.id), {
          image: downloadURL,
        });
        console.log("🚀 New Doc Added with Post Image ID: ", docRef.id);
      }
    );

    setModalStatus(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (renderEvent) => {
      setSelectedFile(renderEvent.target.result);
    };
  };

  return (
    <Transition.Root show={modalStatus} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setModalStatus(false)}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    className="w-full object-contain cursor-pointer"
                    onClick={() => setSelectedFile(null)}
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto cursor-pointer flex items-center justify-center h-12 w-12 rounded-full bg-red-100"
                  >
                    <CameraIcon className="h-6 w-6 text-red-600" />
                  </div>
                )}

                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    Upload a Photo
                  </Dialog.Title>
                </div>
                <div>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={addImagetoPost}
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    ref={captionRef}
                    className="border-none focus:ring-0 w-full text-center"
                    placeholder="Please enter a caption"
                  />
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={uploadPost}
                    disabled={!selectedFile}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300"
                  >
                    {loading ? "Uploading Post" : "Upload Post"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
