import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/epu-logo.png';
import { navGroups } from '../site-data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  


  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--brand-700)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-stretch justify-between gap-3 px-4 py-0 md:px-6 h-[80px]">
          <Link className="flex min-w-0 items-center gap-2.5 md:gap-3" to="/">
            <img alt="Erbil Polytechnic University logo" className="size-12 object-contain md:size-[3.75rem]" src={logoImage} />
            <div className="min-w-0">
              <div className="truncate text-[0.98rem] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[1.32rem]">
                Erbil Polytechnic University
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 md:text-[11px]">Public University Portal</div>
            </div>
          </Link>

<nav className="hidden items-stretch xl:flex" aria-label="Primary">    
            <Link className="nav-link flex items-center h-full" to="/">
              Home
            </Link>
            
            {navGroups ? navGroups.map((group, index) => (
              <div 
                className="group relative flex items-center h-full" 
                key={group.label}
              >
                <button className="nav-link cursor-pointer h-full" type="button">
                  {group.label}
                  <ChevronDown className="size-4 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className={`dropdown-shell absolute top-[100%] z-40 flex flex-col pt-4 transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 filter drop-shadow-xl ${index > 2 ? (group.columns.length > 2 ? "w-[100vw] max-w-[min(calc(100vw-2rem),900px)] right-0" : "w-max right-0") : (group.columns.length > 2 ? "w-[100vw] max-w-[min(calc(100vw-2rem),900px)] left-0" : "w-max left-0")}`}>
                  <div className={`dropdown-panel ${group.columns.length === 1 ? "dropdown-panel--single" : ""} ${group.label === "Academics" ? "dropdown-panel--academics" : ""} ${group.columns.length > 2 ? "dropdown-panel--mega" : ""} `}>
                    {group.columns.map((column, columnIndex) => (
                      <div className="dropdown-column" key={`${group.label}-${column.heading ?? columnIndex}`}>
                        {column.heading ? <div className="dropdown-heading">{column.heading}</div> : null}
                        {column.items.map((item) => (
                          <Link className="dropdown-item" to={item.href} key={item.title}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )) : null}
          </nav>

          <button
            aria-label="Open menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(28,7,112,0.12)] bg-white xl:hidden my-auto"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <Menu className="size-5 text-[color:var(--brand-900)]" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-[90] bg-black/40 xl:hidden backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-[280px] sm:w-[320px] z-[100] bg-white xl:hidden shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 p-4 md:p-6 shrink-0">
            <div className="text-[1.05rem] font-black tracking-[-0.01em] text-[color:var(--brand-900)] uppercase">
              Menu
            </div>
            <button
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
            >
              <X className="size-5 text-gray-500" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="flex flex-col gap-2">
              <Link className="mobile-nav-link" to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
                <ArrowRight className="size-4 opacity-40" />
              </Link>
              {navGroups ? navGroups.map((group, index) => (
                <div className="group" key={group.label}>
                  <div className="mb-3 mt-4 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[color:var(--brand-600)] opacity-80">
                    {group.label}
                  </div>
                  <div className="flex flex-col gap-1.5 pl-3 border-l-2 border-slate-100">
                    {group.columns.map((column, colIdx) => (
                      <React.Fragment key={column.heading || `col-${colIdx}`}>
                        {column.items.map((item, itemIdx) => (
                          <Link className="mobile-nav-link text-sm py-2" to={item.href} key={item.title || itemIdx} onClick={() => setMobileMenuOpen(false)}>
                            {item.title}
                          </Link>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )) : null}
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );
}
