import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {FaChevronDown} from "react-icons/fa"
import Link from "next/link"

export default function ProjectMenu() {
  return (
    <div className="text-right">
      <Menu as="span" className="relative text-left">
        <div>
          <Menu.Button className="flex justify-center items-center w-full">
            Projects
            <FaChevronDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
               <li className="text-sm text-gray-800 font-normal p-2 hover:bg-gray-200">
                 <Link href="/utsav-residential">Utsav Residential</Link>
               </li>
              </Menu.Item>
              <Menu.Item>
               <li className="text-sm text-gray-800 font-normal p-2 hover:bg-gray-200">
                 <Link href="/projects">All Projects</Link>
               </li>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
