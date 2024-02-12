import { Button, Navbar, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
export default function Header() {
  const path = useLocation().pathname;
  const isSignInPage = path === '/sign-in';
  if (isSignInPage) return null;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-green-900 via-green-400 to-green-200 rounded-lg text-white ' >HARI</span>
        YALI
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill >
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'  pill>
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
      </div>
        <Navbar.Collapse>
          <Navbar.Link active={path==="/"}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
        <Navbar.Link active={path === "/categories"}>
            <Link to='/categories'>
              Categories
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      
    </Navbar>
  )
}
