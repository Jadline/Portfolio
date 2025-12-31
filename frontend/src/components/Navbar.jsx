import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            <div className="hidden sm:ml-6 sm:block">
                <Link to='/'><h2 className='font-kaushanScript text-3xl text-white  cursor-pointer'>Jadline</h2></Link>     
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                
                <NavLink 
                to='/' 
                className={
                  ({isActive}) => {
                   return `rounded-md
                   flex
                   items-center
                   gap-2
                
                 px-3 py-2 
                 text-sm
                  font-medium
                   text-white
                   ${isActive && 'bg-white/5'}
                   `
                  }
                }>
                  <div className='w-2 h-2 rounded-full bg-[#c084fc]'>

                  </div>
                  Home
                </NavLink>
                <NavLink
                 to='/projects'
                  className=
                  {
                    ({isActive}) => {
                      return `rounded-md px-3 py-2 text-sm font-medium 
                      text-white  flex
                   items-center
                   gap-2
                      
                        ${isActive && 'bg-white/5'}
                       `
                    }
                  }
                >
                  <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>
                  Projects
                </NavLink>
                <NavLink
                  to='/about'
                  className={
                  ({isActive}) => {
                     return `rounded-md 
                  px-3 
                  py-2 text-sm
                   font-medium
                  text-white
                  flex
                   items-center
                   gap-2
                    
                     ${isActive && 'bg-white/5'}
                     
                     `
                  }
                  }
                >
                   <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>
                  About Me
                </NavLink>
              
              </div>
            </div>
          </div>
          
          <div className="-mr-2 flex sm:hidden">
          
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
           <NavLink 
                to='/' 
                className={
                  ({isActive}) => {
                   return `rounded-md
                   flex
                   items-center
                   gap-2
                
                 px-3 py-2 
                 text-sm
                  font-medium
                   text-white
                   ${isActive && 'bg-white/5'}
                   `
                  }
                }>
                  <div className='w-2 h-2 rounded-full bg-[#c084fc]'>

                  </div>
                  Home
                </NavLink>
                <NavLink
                 to='/projects'
                  className=
                  {
                    ({isActive}) => {
                      return `rounded-md px-3 py-2 text-sm font-medium 
                      text-white  flex
                   items-center
                   gap-2
                      
                        ${isActive && 'bg-white/5'}
                       `
                    }
                  }
                >
                  <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>
                  Projects
                </NavLink>
                <NavLink
                  to='/about'
                  className={
                  ({isActive}) => {
                     return `rounded-md 
                  px-3 
                  py-2 text-sm
                   font-medium
                  text-white
                  flex
                   items-center
                   gap-2
                    
                     ${isActive && 'bg-white/5'}
                     
                     `
                  }
                  }
                >
                   <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>
                  About Me
                </NavLink>
        
        </div>
        <div className="border-t border-white/10 pt-4 pb-3">
        
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
