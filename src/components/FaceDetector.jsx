const FaceDetector = () => {
    
  return (
    <div className="w-1/2 h-full px-10 py-3 bg-purple-600">
        <h1 className="font-bold text-3xl text-white">Live Mood Detection</h1>
        <video className="border border-white bg-purple-400 w-full rounded-xl shadow-xl my-8" src=""></video>
        <p className="mb-5 text-lg text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic unde pariatur esse, quos provident excepturi ab a eius voluptate.</p>
        <button className="bg-white text-purple-600 hover:bg-purple-800 hover:text-white duration-300 px-4 py-2 rounded cursor-pointer font-medium mx-auto block">Check Mood</button>
    </div>
  )
}

export default FaceDetector