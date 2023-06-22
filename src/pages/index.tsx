import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '@/components/header'
import { Hero } from './section/hero'
import { Places } from './section/places'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main>

    <Hero/>
    <Places/>

    </main>
  )

}