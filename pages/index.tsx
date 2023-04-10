import Head from 'next/head'
import Image from 'next/image'
import { Sulphur_Point, Roboto, Rubik } from 'next/font/google'
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
ArcElement,
RadialLinearScale,
PointElement,
LineElement,
Filler
} from 'chart.js';
import {
Grid3,
Message,
Calculator,
Flash,
Setting3,
Danger,
TrendUp,
NotificationBing,
ArrowSquareDown, SearchNormal, I3Square
} from 'iconsax-react';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import styles from '@/styles/Home.module.css';
import logo from '@/public/logo.svg';
import profilePicture from '@/public/pfp.jpg';
import avatar1 from '@/public/avatar1.jpg';
import avatar2 from '@/public/avatar2.jpg';


export default function Home() {
  return <>
    <Head>
      <title>Mockup</title>
      <meta name="viewport" content="width=device-width, initial-scale=2.0" />
    </Head>

  </>
}