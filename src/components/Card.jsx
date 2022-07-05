import React from 'react'
import icon from '../../public/assets/Octocat.jpg'
import { MdLocationOn } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TbLink } from 'react-icons/tb';


const Card = ({data}) => {

  return (
    <div className='flex justify-center items-center pt-4'>
      <div className='bg-bluelight rounded-md w-[600px] pb-10'>
        
        
        <div className='flex'>

        <div className='flex flex-initial w-44 h-[320px] justify-center pt-10'>
        {data.avatar_url ? (
                 <img src={data.avatar_url} className='rounded-full w-[79px] h-[76px]'/>
                 ) : (
                  <img src={icon} className='rounded-full w-[79px] h-[76px]'/>
                )}
        
        </div>
        
        <div className='flex-initial w-full'>

          <div className='flex justify-between px-2 pt-10'>
          {data.name ? (
                 <p className='text-white font-semibold text-xl'>{data.name}</p>
                 ) : (
                  <p className='text-white font-semibold text-xl'>Not Available</p>
                )}
          {data.created_at ? (
                <p className='mr-6 text-white'>{data.created_at}</p>
                 ) : (
                <p className='mr-6 text-white'>Not Available</p>
                )}
            
          </div>
          
          {data.login ? (
            <p className='pt-2 pl-2 text-blue'>{data.login}</p>
          ) : (
            <p className='pt-2 pl-2 text-blue'>The Octocat</p>
          )}
          {data.bio ? (
            <p className='pt-6 pl-2 text-gray text-sm pb-4'>{data.bio}</p>
          ): (
            <p className='pt-6 pl-2 text-gray text-sm pb-4'>This profile has no bio</p>
          )}

          <div className='p-2 pr-6'>
          <div className='bg-bluedark text-white gap-2 grid grid-cols-3 rounded-lg px-10 py-4'>

          <div>
            <p className='text-sm'>Repos</p>
            {data.public_repos ? (
              <p className='font-bold text-lg'>{data.public_repos}</p>
            ) : (
              <p className='font-bold text-lg'>0</p>
            )}
          </div>

          <div>
            <p className='text-sm'>Followers</p>
            {data.followers ? (
              <p className='font-bold text-lg'>{data.followers}</p>
            ) : (
              <p className='font-bold text-lg'>0</p>
            )}
            
          </div>

          <div>
            <p className='text-sm'>Following</p>
            {data.following ? (
              <p className='font-bold text-lg'>{data.following}</p>
            ) : (
              <p className='font-bold text-lg'>0</p>
            )}
            
          </div>

          </div>
          </div>

          

            <div className='grid grid-cols-2 gap-4 px-2 pt-6 text-white'>
              
              <div className='flex gap-2'>
                <MdLocationOn className='mt-1'/>
                {data.location ? (
                  <p className='text-sm'>{data.location}</p>
                ): (
                  <p className='text-sm text-gray'>Not Available</p>
                )}
              </div>

              <div className='flex gap-2'>
                <AiOutlineTwitter className='mt-1'/>
                {data.twitter_username ? (
                 <p className='text-sm'>{data.twitter_username}</p>
                 ) : (
                  <p className='text-sm text-gray'>Not Available</p>
                )}
                
              </div>

              <div className='gap-2 flex pt-2'>
                <TbLink />
                {data.blog ? (
                  <p className='text-sm break-normal overflow-hidden'>{data.blog}</p>
                ) : (
                  <p className='text-sm text-gray'>Not Available</p>
                )}
              </div>

              <div className='flex gap-2 pt-2'>
                <FaBuilding />
                {data.company ? (
                 <p className='text-sm'>{data.company}</p>
                 ) : (
                  <p className='text-sm text-gray'>Not Available</p>
                )}
                
              </div>


            </div>



          


        </div>


        </div>



      </div>
    </div>
  )
}

export default Card