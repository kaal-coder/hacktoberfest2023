import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useAuth } from "../context/useAuth";

const Header = () => {
  const { user, onSignin, onSignout, modal } = useAuth();
  const [modalStatus, setModalStatus] = modal;
  return (
    <div className="shadow-sm border-b-1 bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl items-center mx-5 xl:mx-auto">
        <div className="relative w-24 h-10 hidden lg:inline-grid cursor-pointer">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/ocw"
            layout="fill"
          />
        </div>
        <div className="lg:hidden md:inline-grid hidden relative w-10 h-10 flex-shirnk-0 cursor-pointer">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://links.papareact.com/jjm"
          />
        </div>
        <div className="md:hidden rounded-full relative w-10 h-10 flex-shirnk-0 cursor-pointer">
          <img
            className="rounded-full"
            src={
              user.photoURL ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt="profile-pic"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-grey-50 block w-full pl-10 sm:text-sm border-grey-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          {user ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-1 text-xs h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn inline-flex"
                onClick={() => setModalStatus(!modalStatus)}
              />
              <HeartIcon className="navBtn" />
              <LogoutIcon
                onClick={onSignout}
                className="navBtn text-red-600 inline-flex "
              />

              <img
                src={
                  user.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }
                alt="avatar"
                className="hidden md:inline-flex h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <LoginIcon
              onClick={onSignin}
              className="navBtn inline-flex text-blue-600"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
