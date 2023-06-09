import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo,
  MessageIcon,
  MobileMenu,
  NotificationBellIcon,
  SearchIcon,
  UserAvatar } from '../../assets/images';
import { searchFor } from '../../redux/features/searchSlice';
import { openSidebar } from '../../redux/features/sidebarSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryRef = useRef(null);

  const search = () => {
    navigate(`/admin-dashboard/${queryRef.current.value}`);
    dispatch(searchFor(queryRef.current.value));
  };

  return (
    <nav className="fixed w-full z-40 bg-pri3 h-14 md:h-20 flex justify-between items-center px-10">
      <div className="flex items-center">
        <BrandLogo styling="w-10 md:w-[7%]" />
        <p className="font-[600] text-[16px] text-white ml-[5px] hidden md:block">
          Mentor’s Managers System
        </p>
      </div>
      <button
        type="button"
        aria-hidden="true"
        onClick={() => dispatch(openSidebar())}
      >
        <MobileMenu styling="md:hidden" />
      </button>

      <div className="md:w-[65%] hidden md:flex justify-between h-full items-center">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white h-[28px] w-[75%] rounded-[5px] py-4 text-black5 font-[400] text-[16px]">
          <SearchIcon styling="ml-5" />
          <input
            type="text"
            className="focus:outline-none bg-transparent pl-5 w-full"
            placeholder="Search for anything"
            ref={queryRef}
            onChange={search}
          />
        </div>
        <MessageIcon styling="w-5 md:w-10 mx-1 md:mx-0" color="#F7FEFF" />
        <Link to="/admin-dashboard/notifications">
          <NotificationBellIcon
            styling="w-5 md:w-10 mx-1 md:mx-0"
            color="#F7FEFF"
          />
        </Link>
        <UserAvatar styling="w-5 md:w-10 mx-1 md:mx-0" />
      </div>
    </nav>
  );
}

export default Navbar;
