import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'

const Solutions = () => {
    const cards = [{
        icon: image1,
        title: 'Seamless Blockchain Gaming',
        desc: 'Effortlessly integrate blockchain into your games. With support for multiple languages and complete SDKs for Unreal Engine & Unity, we ensure a smooth experience for developers and players alike.',
    },
    {
        icon: image2,
        title: 'Efficient Player Onboarding',
        desc: 'Simplify player authentication and registration with our tailor-made onboarding process. Manage game-related player data effortlessly without needing an external database.',
    },
    {
        icon: image3,
        title: 'Universal Wallet Compatibility',
        desc: 'Offer automated player wallets and support for renowned external wallets. Enjoy streamlined code interactions across any wallet.',
    },
    {
        icon: image4,
        title: 'Hassle-free Transactions',
        desc: 'Say goodbye to pesky gas fees and repetitive prompts. Our system takes charge, ensuring smooth, automatic transaction processes for an immersive gaming experience.',
    },
    {
        icon: image5,
        title: 'Dynamic In-game Currencies',
        desc: 'Deploy blockchain-driven game currencies effortlessly. Gain insights and control over your game economy, understanding player interactions in real-time.',
        about: 'Dive Deep into Game Currencies',
    },
    {
        icon: image6,
        title: 'Tokenize Your Game Assets',
        desc: 'Craft tokenized game items from weapons to skins. Offer a conventional player experience while seamlessly integrating with underlying web3 mechanisms.',
        about: 'Explore Tokenized Items',
    },
    {
        icon: image7,
        title: 'On-the-fly Shops & Crafting',
        desc: 'Set up versatile shop and crafting systems in minutes. Enable players to transact using your game currency or other digital assets with ease.',
    },
    {
        icon: image8,
        title: 'Dynamic On-chain Lootboxes',
        desc: 'Design lootboxes with weighted outcomes for diverse rewards. Implement prerequisites for enhanced gaming dynamics and engagement.',
    },
    {
        icon: image9,
        title: 'Boundless Game Interconnectivity',
        desc: 'Harness a framework that seamlessly integrates across diverse gaming ecosystems. Unlock infinite possibilities for game collaborations.',
        about: 'Discover Inter-game Synergies',
    },
    {
        icon: image10,
        title: 'Absolute Contract Autonomy',
        desc: 'Maintain full control by transferring contract ownership externally. Choose when and how to disengage from our infrastructure - the power is in your hands.',
        about: 'Understanding Contract Autonomy',
    },
    {
        icon: image11,
        title: 'Unrestricted Gaming Excellence',
        desc: 'Break free from limitations and hidden costs. We champion open, unrestricted access to our technology, fostering creativity and widespread adoption.',
        about: 'Unravel Our Business Philosophy',
    },
    {
        icon: image12,
        title: 'Community-Centric Development',
        desc: 'Trust a dedicated team that values feedback and innovation. Co-creating with our community, we\'re committed to shaping a more refined approach to web3.',
    }
    ]

    return (
        <div className='mt-24 px-4 lg:px-12 xl:px-72'>
            <div className='text-center lg:px-20'>
                <h1 className='text-[32px] md:text-5xl pb-10 font-bold text-white'>Crafted from Our Desires, Built for Your Games.</h1>
                <p className='text-slate-200 text-lg md:text-xl font-semibold'>Seamless Blockchain Interaction for Developers and Players Alike. Delve into our in-depth guide to understand the capabilities of our advanced tool suite:</p>
            </div>


            <div className='grid grid-cols-1 gap-10  lg:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    cards.map((item, index) =>
                    (

                        <div className='bg-card py-5 px-3 rounded-xl mb-5' key={index}>
                            <div className='flex items-center gap-4 mb-2'>
                                <img src={item.icon} alt='' className='bg-slate-800 border-gray-400 rounded-xl w-[20%] p-1' />

                                <h1 className='font-semibold text-base text-white '>{item.title}</h1>

                            </div>
                            <p className='text-slate-300 text-sm font-normal pt-2'>
                                {item.desc}
                            </p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Solutions