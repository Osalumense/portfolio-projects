"use client"

import { useState, useRef, useEffect } from "react"
import { Language } from "@/lib/types"

interface LanguageSwitcherProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

const languages = [
  { code: "en" as Language, label: "EN", flag: "🇬🇧", name: "English" },
  { code: "fr" as Language, label: "FR", flag: "🇫🇷", name: "Français" },
]

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors border border-border/40"
        aria-label="Select language"
      >
        <span className="text-xl">{currentLang.flag}</span>
        <span className="font-medium text-sm">{currentLang.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in-0 zoom-in-95">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors ${
                language === lang.code ? "bg-accent/50" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex flex-col items-start">
                <span className="font-medium text-sm">{lang.label}</span>
                <span className="text-xs text-muted-foreground">{lang.name}</span>
              </div>
              {language === lang.code && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
