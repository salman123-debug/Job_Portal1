// import { useNavigate } from "react-router-dom"



// const navigate = useNavigate();

const callouts1 = [
  {
    name: 'Desk and Office',
    id:1,
    description: 'Web Development Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job9.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    id:2,
    description: 'Frontend Developer Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job1.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    id:3,
    description: 'Full Stack Developer',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job2.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const callouts = [
  {
    name: 'Desk and Office',
    id:1,
    description: 'Web Development Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job3.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    id:2,
    description: 'Frontend Developer Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job4.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    id:3,
    description: 'Full Stack Developer',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job5.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const callouts3 = [
  {
    name: 'Desk and Office',
    id:7,
    description: 'Web Development Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job6.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    id:8,
    description: 'Frontend Developer Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job7.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    id:9,
    description: 'Full Stack Developer',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job8.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const callouts2 = [
  {
    name: 'Desk and Office',
    id:10,
    description: 'Web Development Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job10.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    id:11,
    description: 'Frontend Developer Intern',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job11.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    id:12,
    description: 'Full Stack Developer',
    company:'Digital Molucule Pvt Ltd',
    city:'Lucknow, Up, India (onsite)',
    imageSrc: './job12.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function JobCard() {
  // const handleClick =(callout)=>{
  //   navigate(`/jobdetails/${callout.id}`, {state:{callout}})
  // }
  return (
    <div className="bg-transparent ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900">Lucknow</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.id} className="group relative" onClick={()=>handleClick(callout)}>
                <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-36">
                  <div className="right-4 top-5 absolute text-left">
                  <p className="  font-serif font-bold text-center">{callout.description}</p>
                  {callout.company}
                  <p className="text-gray-500">{callout.city}</p>
                  </div>
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-40 object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-5 text-gray-900">Noida</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts1.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-36">
                  <div className="right-4 top-5 absolute text-left">
                  <p className="  font-serif font-bold text-center">{callout.description}</p>
                  {callout.company}
                  <p className="text-gray-500">{callout.city}</p>
                  </div>
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-40 object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-5 text-gray-900">Gurugram </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts2.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-36">
                  <div className="right-4 top-5 absolute text-left">
                  <p className="  font-serif font-bold text-center">{callout.description}</p>
                  {callout.company}
                  <p className="text-gray-500">{callout.city}</p>
                  </div>
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-40 object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-5 text-gray-900">Delhi</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts3.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-36">
                  <div className="right-4 top-5 absolute text-left">
                  <p className="  font-serif font-bold text-center">{callout.description}</p>
                  {callout.company}
                  <p className="text-gray-500">{callout.city}</p>
                  </div>
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-40 object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
