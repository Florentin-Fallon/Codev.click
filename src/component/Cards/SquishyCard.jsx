import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const SquishyCard = ({
  namePackage,
  price,
  list,
  lists,
  threeList,
  button,
  url,
}) => {
  return (
    <section className=" px-4 py-12">
      <div className="mx-auto w-fit">
        <Card 
        namePackage={namePackage}
        price={price}
        list={list}
        lists={lists}
        threeList={threeList}
        button={button}
        url={url}
        />
      </div>
    </section>
  );
};

const Card = ({
  namePackage,
  price,
  list,
  lists,
  threeList,
  button,
  url,
}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {namePackage}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {price}
          <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-xl font-black leading-[1.2]"
        >
          {"minimum"}
        </motion.span>
        </motion.span>
        <ul>
          <li className="flex">
            <svg 
              class="w-6 h-6 text-gray-800 dark:text-white  mr-2 mb-4" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path 
              stroke="white" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
          {list}
          </li>
          <li className="flex">
            <svg 
                class="w-6 h-6 text-gray-800 dark:text-white mr-2 mb-4" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
            >
                <path 
                stroke="white" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M5 11.917 9.724 16.5 19 7.5"
                />
            </svg>
            {lists}
          </li>
          <li className="flex">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
            {threeList}
          </li>
        </ul>
      </div>
      <Link to={url}><button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        {button}
      </button></Link>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default SquishyCard;