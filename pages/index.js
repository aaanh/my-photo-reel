import Gallery from '../components/Gallery'
import DefaultWrapperLayout from '../layouts/DefaultWrapperLayout'

const HomePage = () => {
  return (
    <DefaultWrapperLayout
      title="Home"
      description="Welcome to my photography reels."
    >
      <div className="flex justify-center space-x-4 overflow-x-hidden">
        <div className="group relative my-4">
          <img src='/splash.jpg' alt="splash" className="z-0 w-96"></img>
          <div className="absolute bottom-0 left-0 z-10 p-2 text-transparent transition-all duration-200 ease-in-out group-hover:bg-neutral-900 group-hover:text-white">
            Me wandering somewhere in Japan (2015)
          </div>
        </div>
        <div className="flex w-2/5 flex-col justify-center space-y-4">
          <p>
            <span className="font-bold">Anh H Nguyen</span> is a photography
            addict who likes to meddle with cool new cameras and accessories. He
            mostly shoots landscapes and natural sceneries.
          </p>
          <p>
            By day, he is a software engineer. By night, man rigs up with his
            backpack full of gear, trying to capture the best moment of his
            surroundings.
          </p>
        </div>
      </div>
      <Gallery></Gallery>
    </DefaultWrapperLayout>
  )
}

export default HomePage