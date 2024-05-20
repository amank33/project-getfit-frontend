import { motion } from "framer-motion";
const Nutrition = ({ setSelectedPage }) => {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function openTab(e, tabname) {
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  return (
    <div id="nutrition">
      <motion.div
        className="container"
        onViewportEnter={() => setSelectedPage("nutrition")}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="sub-title">Nutrition</h1>
        <div className="tab-titles">
          <p
            className="tab-links active-link"
            onClick={(e) => openTab(e, "protein")}
          >
            High Protein
          </p>
          <p className="tab-links" onClick={(e) => openTab(e, "carbs")}>
            High Carbohydrate
          </p>
          <p className="tab-links" onClick={(e) => openTab(e, "fibre")}>
            High Fibre
          </p>
        </div>
        <div className="tab-contents active-tab" id="protein">
          <div className="container">
            <div>
              <h2>Egg</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Peanut</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Milk</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a
                href="https://www.menshealth.com/uk/building-muscle/a757285/best-ab-exercises/"
                target="_blank"
              >
                learn more
              </a>
            </div>
            <div>
              <h2>Dry Fruits</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Fish</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Chicken</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Meat</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Cottage cheese</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Salmon</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Lentils</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
          </div>
        </div>
        <div className="tab-contents" id="carbs">
          <div className="container">
            <div>
              <h2>Rice</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Peanut</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Milk</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Dry Fruits</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Fish</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Chicken</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Meat</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Cottage cheese</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Salmon</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Lentils</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
          </div>
        </div>
        <div className="tab-contents" id="fibre">
          <div className="container">
            <div>
              <h2>fruits</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>fruits</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Milk</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a
                href="https://www.menshealth.com/uk/building-muscle/a757285/best-ab-exercises/"
                target="_blank"
              >
                learn more
              </a>
            </div>
            <div>
              <h2>Dry Fruits</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Fish</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Chicken</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Meat</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Cottage cheese</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Salmon</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
            <div>
              <h2>Lentils</h2>
              <ul>
                <li>
                  <span>Protein:</span> 6g
                </li>
                <li>
                  <span>Carb:</span> 0.6g
                </li>
                <li>
                  <span>Fat:</span> 5g
                </li>
                <li>
                  <span>Total Calories:</span> 72 Cal
                </li>
              </ul>
              <a href="#">learn more</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Nutrition;
