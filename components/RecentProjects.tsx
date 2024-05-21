import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, livelink, repolink }) => (
          <div key={id} className="sm:h-[36rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title={livelink} href={livelink}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h[40vh] h-[30vh] mb-10 rounded-2xl">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <a href={livelink} target="_blank" rel="noopener noreferrer" className="w-full h-full z-10 absolute bottom-0">
                  <img src={img} alt={title} />
                </a>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon.title}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-1"
                      style={{ transform: `translateX(-${5 * index * 2})px` }}
                      title={icon.title}
                    >
                      <img src={icon.img} alt={icon.title} className="p-2" />
                    </div>
                  ))}
                </div>

                <div>
                  <a href={repolink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                    <p className="lg:text-xl md:text-xs text-sm text-purple">View Code</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
