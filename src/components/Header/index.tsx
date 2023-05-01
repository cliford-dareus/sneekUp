import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import {
  DasboardDayDisplay,
  DashboardHeader,
  MenuToggle,
  Navigation,
  NavigationBackground,
} from "./styles";
import { Time } from "../../hooks/useGetTime";
import { Icon } from "../../pages/Dasboard/styles";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import Navigations from "../Navigation";

const sidebar = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 360px 40px)",
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const index = ({ time }: { time: Time }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <DashboardHeader>
      <DasboardDayDisplay>
        {time.day !== "" ? time.day : "Loading..."}
      </DasboardDayDisplay>

      <Navigation
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle
          variants={{
            open: { color: "white" },
            closed: { color: "white", transition: { delay: 0.5 } },
          }}
          transition={{ duration: 1 }}
          onClick={() => toggleOpen()}
        >
          {!isOpen ? <RiMenu4Line /> : <RiCloseLine />}
        </MenuToggle>

        <Navigations />

        <NavigationBackground variants={sidebar} />
      </Navigation>
      {/* Maybe add a Music player in the header */}
    </DashboardHeader>
  );
};

export default index;
