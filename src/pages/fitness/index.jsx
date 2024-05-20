import { motion } from "framer-motion";
const Fitness = ({ setSelectedPage }) => {
  return (
    <div id="exercises">
      <motion.div
        className="container"
        onViewportEnter={() => setSelectedPage("exercises")}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="sub-title">Exercises</h1>
        <div className="workout-list">
          <div>
            <h2>Chest</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/tkhr-XbLw38?si=-VU-LFrKwH2mhQLy"
              target="_blank"
            >
              video
            </a>
          </div>
          <div>
            <h2>Back</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/ntfKMjw69sU?si=oYBXJ0x1Ixslfexr"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Abdominals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/R8d-rDXG_-4?si=UJr_pQKKysDGolUK"
              target="_blank"
            >
              video
            </a>
          </div>
          <div>
            <h2>Shoulders</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/mw7r41sjmhM?si=CRPqyR75tGTbXxw6"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Calves</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/xhRnmZiZdxI?si=TdEPEYJH6av1SeaF"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Hamstrings</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/5Cyui1aLR9g?si=X-1DL3jYxU-b9Yzh"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Quadriceps</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/ixom-94i_Rs?si=TfYMTKiajo22dfCi"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Glutes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/vlps69xIXY4?si=VhizyvkMID8zHktt"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>biceps</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/FQmguedPVxk?si=91YZwM05T1eXKP62"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Triceps</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/rzTapF3new8?si=MgXQD9PEtrHjuU-v"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Forearms</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/BEgLhZVHbjM?si=0kXoiTto24E5WY-3"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Trapezius</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/IasPK7EHO3I?si=jYQRNRFHvHmYXMRN"
              target="_blank"
            >
              Video
            </a>
          </div>
          <div>
            <h2>Latissimus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vulputate eros non eros rutrum hendrerit. Curabitur sapien orci,
              cursus ut egestas at, lacinia at augue.
            </p>
            <a
              href="https://youtube.com/shorts/pYnQC3OGMi0?si=59pP0jGuF4RWFtUC"
              target="_blank"
            >
              Video
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Fitness;
