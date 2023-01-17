import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import IconHtml from '../public/images/html.png'
import IconCss from '../public/images/css.png'
import IconJs from '../public/images/js.png'
import IconReact from '../public/images/react.png'
import IconPhp from '../public/images/php.png'
import IconNode from '../public/images/node.png'
import IconExpress from '../public/images/express.png'
import IconMysql from '../public/images/mysql.png'
import IconMongo from '../public/images/mongo.png'
import IconBootstrap from '../public/images/bootstrap.png'
import IconTailwind from '../public/images/tailwindcss-logotype/tailwindcss-logotype.svg'
import IconAws from '../public/images/aws.png'
import IconDocker from '../public/images/docker.png'
import IconGit from '../public/images/git.png'
import IconGithub from '../public/images/github.png'
import IconC from '../public/images/C.png'
import IconFigma from '../public/images/figma.png'
const MarqueeCompo = () => {
  return (
    <Marquee gradient={false} speed={150}>
    <div className='image_wrapper'>
         <Image src={IconHtml} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconCss} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconJs} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconPhp} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconReact} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconNode} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconExpress} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconBootstrap} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconTailwind} alt="" height={55}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconMysql} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconMongo} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconAws} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconDocker} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconGit} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconGithub} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconC} alt="" height={100}/>
     </div>
     <div className='image_wrapper'>
         <Image src={IconFigma} alt="" height={100}/>
     </div>
 </Marquee>
  )
}

export default MarqueeCompo