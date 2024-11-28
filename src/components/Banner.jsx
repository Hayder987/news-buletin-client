import banner from '../images/banner.jpg' 

const Banner = () => {
    return (
        <div 
        style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat'
          }}
          className="p-4 md:p-10 lg:p-20 min-h-[50vh] my-20 rounded-xl"
          >
          <div className="lg:max-w-[800px] mx-auto p-6">
            <h1 className="text-gray-100 text-3xl md:text-5xl font-bold text-center mb-6">Stay Informed, Stay Ahead</h1>
            <p className="text-center text-gray-300 font-medium mb-10">Welcome to the News Bulletin — your trusted source for breaking news, insightful stories, and in-depth analysis. Stay connected to the world with updates that matter most to you, delivered anytime, anywhere.</p>
            <div className="">
                <form  className="flex justify-center items-center">
                  <input type="text" name="news" id="" className='md:max-w-[600px] py-2 px-4 outline-none' />
                  <input type="submit" value="Search" className='py-2 px-4 bg-blue-700 text-white font-semibold'/>
                </form>
            </div>
          </div>
        </div>
    );
};

export default Banner;