import React from 'react'

const SongsCont = () => {
    const playListData = [
        {
            title : "title",
            subTitle : "subTitle",
            songURL : "songURL",
            mood : "happy"
        },
        {
            title : "title",
            subTitle : "subTitle",
            songURL : "songURL",
            mood : "sad"
        },
        {
            title : "title",
            subTitle : "subTitle",
            songURL : "songURL",
            mood : "angry"
        },
        {
            title : "title",
            subTitle : "subTitle",
            songURL : "songURL",
            mood : "surprise"
        },
        {
            title : "title",
            subTitle : "subTitle",
            songURL : "songURL",
            mood : "neutral"
        }
    ]

    const songsPlayList = playListData.map((elm, idx)=>{
        return <li key={idx} className='rounded py-2 px-4 relative mt-5 shadow-lg hover:bg-purple-100 duration-100 '>
                <h4 className='leading-none font-medium'>Sunrise Serenade</h4> 
                <span className='text-sm font-medium text-gray-500 '>Ava Carter</span>
                <img className='w-4 absolute right-4 top-[50%] -translate-y-[50%]' src="../src/assets/play-btn-icon.png" />
            </li>
    })
    
  return (
    <div className='w-1/2 h-full px-5 py-3'>
        <h1 className='font-bold text-3xl text-purple-600 ml-4'>Moody Songs</h1>
        <ul>
            {songsPlayList}
        </ul>
    </div>
  )
}

export default SongsCont