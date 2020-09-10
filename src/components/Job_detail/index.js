import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/index.scss";
import location from "../Job_cards/assets/location.svg";
import building from "../Job_cards/assets/building.svg";
import money from "../Job_cards/assets/money.svg";
import target from "../Job_cards/assets/target.svg";
import api from "../../ApiUrl";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    const children = this.props.children;
    fetch(api(children)).then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          data: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded } = this.state;
    const { url } = this.state.data;
    if (error) {
      console.log(error.message);
      return <h1>Oops, data no disponible</h1>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="job_container">
          <div>
            <article>
              <h2>Data Science</h2>
              <img src={url} alt="logo" />
            </article>
            <section className="card-aspects__container">
              <ul>
                <li>
                  <span>
                    <img src={location} alt="location" /> New York, NY
                  </span>
                </li>
                <li>
                  <span>
                    <img src={building} alt="building" /> Vera Institute of
                    justice 3.2
                  </span>
                </li>
                <li>
                  <span>
                    <img src={money} alt="money" /> $37K-$66K (Glassdoor est.)
                  </span>
                </li>
                <li>
                  <span>
                    <img src={target} alt="target" /> 3.2
                  </span>
                </li>
              </ul>
            </section>
            <section className="scrollable">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur corrupti consequuntur facere excepturi! Non
                reprehenderit voluptates minus exercitationem adipisci, corporis
                iure! Ea perspiciatis architecto veniam voluptates! Quod
                exercitationem magnam facilis ab odio sequi incidunt illo? Rem,
                temporibus saepe minus dignissimos recusandae velit eos quasi
                modi laborum omnis! Placeat maxime, illum aspernatur officiis
                inventore optio ducimus, ut, itaque saepe nemo tempore
                perferendis consequuntur? Voluptates aliquam sunt ducimus
                architecto optio blanditiis voluptatem, autem est iusto itaque
                velit similique cum aut. Veritatis, quae sequi repellendus
                perspiciatis tempore facilis adipisci vel, earum, ad qui
                provident consequuntur omnis deleniti. Saepe quaerat maxime
                omnis voluptate amet minus quasi ducimus in neque commodi
                excepturi, est, animi laboriosam dolorum repellat odio nesciunt
                aliquam pariatur? Id quod tenetur culpa architecto animi hic
                molestiae laudantium qui, at suscipit distinctio cupiditate iste
                ipsa, odio omnis dolorem, blanditiis explicabo expedita
                praesentium! Porro nihil molestias quibusdam eveniet nulla
                possimus ratione illum sequi optio amet perferendis
                exercitationem quo, provident labore voluptatum quisquam omnis
                veritatis officia voluptatem aliquid distinctio qui quae quidem
                quaerat? Fuga at deserunt porro quidem libero facilis quos
                assumenda tenetur hic? Iste, suscipit. Enim in adipisci,
                accusantium ullam dolorem officiis sapiente similique. Magni
                voluptatum asperiores dolor hic eos fugiat aut suscipit
                doloremque facere consequuntur et dolorum odit at laborum id,
                minus sequi libero perspiciatis delectus! Itaque accusantium
                corporis vero quam? Et enim rerum laudantium dicta deleniti
                inventore a doloribus obcaecati, iusto dolore delectus
                reiciendis id? Odit exercitationem similique atque, dolore
                facere rem, enim odio provident perspiciatis aut adipisci. Quam
                adipisci sapiente ullam rerum! Nesciunt beatae excepturi rem
                obcaecati et alias mollitia quod est, dolore assumenda
                consequuntur. Ut, doloremque error aut magni reprehenderit omnis
                debitis nam cupiditate iure dolorem veniam optio adipisci
                perspiciatis beatae labore eveniet nostrum harum in aliquid
                temporibus quas sint. Quaerat numquam voluptatum ipsum, tempora
                aliquam, harum et nostrum sed quam soluta recusandae,
                repudiandae laborum? Esse, a. Laudantium error voluptatibus
                accusantium eum dolor sint. Totam consectetur est deleniti
                beatae necessitatibus? Magni iste laudantium provident numquam
                natus voluptate adipisci ipsam dolorem earum repellat accusamus
                quidem fuga commodi molestias suscipit aliquid sapiente est,
                asperiores expedita temporibus soluta eum voluptas explicabo.
                Dolore porro consequatur harum doloribus voluptatum natus qui
                sed! Deleniti quas laudantium enim magni qui eos molestiae eum
                doloribus natus laboriosam sequi asperiores reiciendis harum
                est, ullam corrupti. Exercitationem quas nisi quo doloribus
                earum odit repellendus corrupti molestiae magnam maxime nobis
                eaque distinctio, impedit numquam dolor veritatis vel, porro
                aliquam officia illo reiciendis tempore natus ea cupiditate!
                Unde voluptatibus fugit natus a sapiente officiis dicta esse
                perspiciatis eos laudantium laboriosam quas ipsa, itaque aut
                possimus rerum ad velit quasi tempora soluta molestias sequi
                porro nobis. Facilis perspiciatis dignissimos explicabo
                exercitationem assumenda atque soluta cum blanditiis dolore
                velit, ullam veniam sapiente, unde ipsa voluptate nostrum sed
                quisquam eligendi! Minima amet provident inventore ad ducimus
                velit distinctio saepe accusantium fugit voluptate consequatur
                expedita, sed voluptatem cupiditate! Velit asperiores vero
                adipisci reprehenderit, ex possimus mollitia tempore molestiae
                accusamus. Velit aperiam cumque saepe, modi illum eveniet
                recusandae? Ullam quisquam cupiditate vitae? Atque eius ipsam
                sit expedita accusantium? Nostrum obcaecati, at quisquam
                veritatis necessitatibus animi libero asperiores vel, quasi,
                eius consequatur. Ea, illum adipisci maxime temporibus nihil
                tempora aliquam numquam nostrum iusto nemo. Dignissimos pariatur
                debitis, eveniet sint asperiores officiis, ipsum ea nihil amet
                dolore, necessitatibus facere quae doloribus rerum? Incidunt
                cum, quasi porro repellendus aspernatur sequi deleniti labore
                earum placeat ex repellat voluptatibus? Consectetur quidem harum
                incidunt molestias, nulla ipsam impedit cumque expedita magnam
                quasi, ex blanditiis? In et saepe porro iste? Non ut ipsam
                assumenda. Nobis, vitae corrupti. Optio sunt impedit odio
                quaerat animi error dolores? In, quisquam laboriosam a quo
                tempora corporis iste quibusdam.
              </p>
              <section className="buttons">
                <button className="apply">Apply</button>
                <Link className="text-reset text-decoration-none" to={`/home`}>
                  <button className="back">Back</button>
                </Link>
              </section>
            </section>
          </div>
        </div>
      );
    }
  }
}

export default index;
